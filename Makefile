.PHONY: install run streamlit test quality format lint

install:
	poetry install

run:
	poetry run python src/app/main.py

streamlit:
	poetry run streamlit run src/app/main.py

test:
	poetry run pytest -q --disable-warnings

quality: format lint

format:
	poetry run black src tests

lint:
	poetry run ruff check src tests
	poetry run mypy src
