 # FIFA Random Countries

## Introduction

Welcome to my web! I am excited to have you here and hope you enjoy your browsing experience. In this README blog, we will provide you with information on what you can expect to find on our web, how to navigate it, and some of the key features that we offer.

## **Getting Started:**

To start browsing our web, simply type[https://habtamutesfayeact.github.io/Fifia-Random-coutries/](https://habtamutesfayeact.github.io/Hotel-Ekub-paring/) or click on the link above. Once you arrive on our homepage, you will be greeted with a clean, simple design that is easy to navigate. 

## Navigation

To navigate simply scroll down since it's a one page and you can find the functionality and dynamic feature

## How does it work

This is an HTML code for a webpage that appears to be related to reviewing the FIFA World Cup. It includes a navigation bar at the top with a title and an image. The main content of the page is divided into two sections.

The first section is titled "Countries" and contains a list of 16 countries in a list group. It also includes a button to assign these countries to four different groups.

The second section is divided into four cards, each representing a group. Each card contains a form with four input fields for the user to enter the scores of the teams in that group. There is also a "Save" button to save the scores entered.

The final part of the page includes two charts, each in a separate column. The charts are created using Highcharts, a JavaScript charting library. The charts appear to display the results of the matches played by the teams in the groups. There is also a reference to an external JavaScript file, "script.js", which is presumably used to handle the data and events on the page.

**The javscript part**

The JavaScript code fetches data from a REST API and creates pie and bar charts using Highcharts library. It also includes functions to assign values to form labels and retrieve input values from the form. Here is a breakdown of the code:

1. An empty array **`countryname`** is created to store country names retrieved from the API.
2. Four empty arrays **`l1`**, **`l2`**, **`l3`**, and **`l4`** are created to store the labels for each form.
3. An empty array **`inputs`** is created to store the user input values from the form.
4. A constant **`apiUrl`** is created to store the REST API endpoint URL.
5. The **`fetch`** method is used to retrieve data from the API.
6. If the response is not successful, an error is thrown.
7. The retrieved data is converted to JSON format.
8. A **`for`** loop is used to select 16 countries at random from the retrieved data and push their names to the **`countryname`** array.
9. The **`lists`** function is called to assign the 16 country names to the HTML labels.
10. The **`lists`** function loops through each form and assigns a value to each label element from the **`countryname`** array.
11. The **`assignValues`** function shuffles the indices of an array of 16 numbers and assigns the country names to the corresponding labels using the shuffled indices.
12. The **`getValue`** function retrieves the input values from the form with id "RegForm" and calls the **`createChart`** function with the retrieved values and the labels from **`l1`**.
13. The **`getValue1`**, **`getValue2`**, and **`getValue3`** functions do the same as **`getValue`** but for forms with ids "RegForm1", "RegForm2", and "RegForm3" respectively.
14. The **`createChart`** function creates two charts using Highcharts library. The first is a pie chart and the second is a bar chart. The chart data is based on the country names and scores passed to the function. The charts are rendered on the HTML page with ids "chart1" and "chart2".

## Conclusion

We hope that this README blog has been helpful in providing you with an overview of our web and what you can expect to find here. If you have any questions or feedback, please don't hesitate to get in touch with us. We are always happy to hear from our visitors and are committed to providing you with the best browsing experience possible. Thanks for visiting our web, and we look forward to seeing you again soon!
