import requests

url = "https://store-groceries.p.rapidapi.com/groceries/search/bread"

headers = {
	"X-RapidAPI-Key": "8c64811343msh15df3c707bba844p1c1509jsnfdafda318c5d",
	"X-RapidAPI-Host": "store-groceries.p.rapidapi.com"
}

response = requests.get(url, headers=headers)

print(response.json())
