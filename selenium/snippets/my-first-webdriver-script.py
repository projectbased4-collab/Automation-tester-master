from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://example.com")

# TODO: figure out why find_element sometimes fails on slow pages
heading = driver.find_element(By.TAG_NAME, "h1")
print("Heading:", heading.text)

driver.quit()
