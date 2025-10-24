from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Go to the home page
    page.goto("http://localhost:8000")
    page.screenshot(path="jules-scratch/verification/01-home.png")

    # Go to the HTML course
    page.click('a[href="curso-html5/aula-1-esqueleto.html"]')
    page.wait_for_load_state()
    page.screenshot(path="jules-scratch/verification/02-html-lesson.png")
    page.go_back()

    # Go to the CSS course
    page.click('a[href="curso-css/aula-1-introducao.html"]')
    page.wait_for_load_state()
    page.screenshot(path="jules-scratch/verification/03-css-lesson.png")
    page.go_back()

    # Go to the JavaScript course
    page.click('a[href="curso-js/aula-1-introducao.html"]')
    page.wait_for_load_state()
    page.screenshot(path="jules-scratch/verification/04-js-lesson.png")
    page.go_back()

    # Go to the Angular course
    page.click('a[href="curso-angular/aula-1-introducao.html"]')
    page.wait_for_load_state()
    page.screenshot(path="jules-scratch/verification/05-angular-lesson.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
