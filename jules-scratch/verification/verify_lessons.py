from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Navigate to the main page
    page.goto("http://localhost:8000")
    page.screenshot(path="jules-scratch/verification/01-main-page-updated.png")

    # Navigate to the new HTML lesson
    page.goto("http://localhost:8000/curso-html5/aula-2-tags-comuns.html")
    page.screenshot(path="jules-scratch/verification/02-html-lesson-2.png")

    # Navigate to the new CSS lesson
    page.goto("http://localhost:8000/curso-css/aula-2-seletores.html")
    page.screenshot(path="jules-scratch/verification/03-css-lesson-2.png")

    # Navigate to the new JS lesson
    page.goto("http://localhost:8000/curso-js/aula-2-variaveis-tipos-dados.html")
    page.screenshot(path="jules-scratch/verification/04-js-lesson-2.png")

    # Navigate to the new Angular lesson
    page.goto("http://localhost:8000/curso-angular/aula-2-componentes.html")
    page.screenshot(path="jules-scratch/verification/05-angular-lesson-2.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
