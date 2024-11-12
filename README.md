# tutorial

## Setting up a development environment

It's recommended to use [uv](https://docs.astral.sh/uv/) to run the project.
[Install uv](https://docs.astral.sh/uv/getting-started/installation/) with:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Then run the project with:

```bash
uv run python manage.py runserver
```

Alternatiely, you can sync your environment with:

```bash
uv sync
```

And activate the virtual environment with:

```bash
source .venv/bin/activate
```

From there, you can run commands normally:

```bash
python manage.py runserver
```
