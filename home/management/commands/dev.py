import os
import threading

from django.core.management import call_command
from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
from ...npm import NPM, NPMException

class Command(BaseCommand):
    help = "Run the development server for both django and vite"

    def add_arguments(self, parser):
        subparsers = parser.add_subparsers(
            title="dev-commands",
            required=True,
        )
        runserver_parser = subparsers.add_parser(
            "runserver",
            help="Start both vite and django development servers",
        )
        runserver_parser.add_argument(
            "addrport", nargs="?", help="Optional port number, or ipaddr:port"
        )
        runserver_parser.add_argument(
            "--ipv6",
            "-6",
            action="store_true",
            dest="use_ipv6",
            help="Tells Django to use an IPv6 address.",
        )
        runserver_parser.add_argument(
            "--nothreading",
            action="store_false",
            dest="use_threading",
            help="Tells Django to NOT use threading.",
        )
        runserver_parser.add_argument(
            "--noreload",
            action="store_false",
            dest="use_reloader",
            help="Tells Django to NOT use the auto-reloader.",
        )
        runserver_parser.set_defaults(method=self.handle_runserver)

    def handle(self, *args, method, **options):
        self.npm = NPM(cwd=settings.BASE_DIR)
        method(*args, **options)

    def handle_runserver(self, **options):
        # per https://code.djangoproject.com/ticket/8085 our custom runserver code should only be run when
        # os.environ["RUN_MAIN"] is set
        if not os.environ.get("RUN_MAIN", False):
            print("Running development servers")
            # Start vite in a background, daemonic thread so that it will watch for frontend changes while the django dev
            # server is running, then terminate when the django dev server stops
            t = threading.Thread(target=self.npm_command, args=("run", "dev"), daemon=True)
            t.start()

        # This calls whatever command resolves as `runserver` according to the django project config. That should be
        # the default django one for almost every app, and others need to be prepared to accept its options.
        return call_command("runserver", **options)

    def npm_command(self, *args):
        try:
            self.npm.command(*args)
        except NPMException as err:
            raise CommandError(err)
        except KeyboardInterrupt:
            pass