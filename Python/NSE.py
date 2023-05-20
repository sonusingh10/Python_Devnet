import requests
from bs4 import BeautifulSoup

url = 'https://www.nseindia.com/'
headers = {'User-Agent': 'Mozilla/5.0'}
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

# Find the table with class "most_active_table" and get all rows
most_active_table = soup.find('table', {'class': 'most_active_table'})
rows = most_active_table.find_all('tr')

# Print header row
header_row = rows[0].find_all('th')
print(f"{header_row[0].text:<15} {header_row[1].text:<25} {header_row[2].text:<20} {header_row[3].text:<20} {header_row[4].text:<15} {header_row[5].text:<15}")

# Print data rows
for row in rows[1:]:
    cols = row.find_all('td')
    print(f"{cols[0].text:<15} {cols[1].text:<25} {cols[2].text:<20} {cols[3].text:<20} {cols[4].text:<15} {cols[5].text:<15}")
