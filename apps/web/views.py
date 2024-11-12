from django.template.response import TemplateResponse
from django.contrib.auth.decorators import login_required

def home(request):
    return TemplateResponse(request, 'web/landing_page.html')


@login_required
def app_home(request):
    return TemplateResponse(request, 'web/app_home.html')
