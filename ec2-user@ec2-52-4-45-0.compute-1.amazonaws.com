{
  "Mainline": {
    "Table": {
      "Header": {
        "Data": [
          "Parent Company",
          "Subsidiary Portfolio / Services",
          "HQ / Info",
          "Annual Revenue ($ million)",
          "HomePage",
          "Logo"
        ]
      },
      "Row": [
        {
          "Company": "UPS",
          "Services": "UPS Ground, UPS Freight",
          "Hubs": {
            "Hub": [
              "55 Glenlake Parkway, Sandy Springs, Georgia, U.S.",
              "UPS is a global leader in logistics, offering a broad range of solutions including the transportation of packages and freight; the facilitation of international trade, and the deployment of advanced technology to more efficiently manage the world of business."
            ]
          },
          "Revenue": "$24,752",
          "HomePage": "https://www.ups.com/us/en/Home.page",
          "Logo": "UPS.png"
        },
        {
          "Company": "FedEx",
          "Services": "FedEx Ground, FedEx Freight, FedEx Custom Critical",
          "Hubs": {
            "Hub": [
              "942 South Shady Grove Road[1], Memphis, Tennessee, U.S.",
              "FedEx Corporation is an American multinational courier delivery services company headquartered in Memphis, Tennessee. The name FedEx is a syllabic abbreviation of the name of the company's original air division, Federal Express (now FedEx Express), which was used from 1973 until 2000. The company is known for its overnight shipping service, but also for pioneering a system that could track packages and provide real-time updates on package location."
            ]
          },
          "Revenue": "$14,149",
          "HomePage": "https://www.fedex.com/en-us/home.html",
          "Logo": "FedEx.png"
        }
      ]
    }
  }
}
