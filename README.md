# Introduction
Hello viewer and welcome to my submission for Challenge 14 aka the belly-button-challenge. For context, at the time of writing this, I am enrolled in the Data Analytics and Visualizations bootcamp with the University of MN. We are assigned a challenge homework per module. This is Module 14's challenge on JavaScript. I am using a windows/PC laptop.

# Overview
Description: "In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare."

There were 6 parts to the assignment:

1) Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
2) Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual. See reference image:
![Screenshot 2023-10-04 164654](https://github.com/leeangel0428/nosql-challenge/assets/137225965/a3945195-751c-4e70-94d9-479f95e5e0f2)
3) Create a bubble chart that displays each sample. See reference image:
![Screenshot 2023-10-04 164702](https://github.com/leeangel0428/nosql-challenge/assets/137225965/b475c0a8-c1f3-4b37-aa16-9e2070e9d5cd)
4) Display the sample metadata, i.e., an individual's demographic information.
5) Display each key-value pair from the metadata JSON object somewhere on the page. See reference image:
![Screenshot 2023-10-04 164708](https://github.com/leeangel0428/nosql-challenge/assets/137225965/bbd23ec4-8b6b-482a-8b37-9d0c348f1ad1)
6) Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.

### Link to view/interact with my webpage: https://leeangel0428.github.io/belly-button-challenge/

# Additional Information:
In this repository, you will find the index.html file and the StarterCode folder. The StarterCode folder contains the samples.json dataset and the static folder that contains my finished code in the app.js file. I had a particularly difficult time getting started on this challenge. I must give credit where it is due, please note that I took inspiration from two random repositories who worked on the same challenge. Though theirs are different from mine, there are many similarities in structure/lines. I tried my best to make it my own. Aside from the sources cited below, everything used was retained information gathered from my classes and class activities. As always shout out to my bootcamp TAs Sam and Randy for all their help answering my questions during office hours, my instructor Hunter for always being clear in his articulation of the course material, and my classmates for their encouragement and support.

# Troubleshooting:
The only notable error to mention is that because I did not do the bonus/advanced portion of the challenge, I have an error on my console. The image shows what it looked like before I even made any changes to my app.js file but it pretty much looks the same. Please see image.
![error-no-bonus js file](https://github.com/leeangel0428/nosql-challenge/assets/137225965/aa065a23-1b57-426f-9769-43663b0555bf)

Unfortunately, I wasn't able to screengrab this but I also had an issue with getting my webpage to deploy and display properly. I looked at the console and saw an error that GitHub wasn't able to read my index.hmtl file, so I had to move it to /root aka the same directory/folder the StarterCode folder is in. I then had to fix the index.html file's src code to reflect the path changes. At this time I also removed the src code that included the bonus.js so the error in the image above, also disappeared. All errors fixed! 

# Resources and Citations (In Usage Order):
### Random GitHub Repos Used for Inspo:

https://github.com/katyoung91/belly-button-challenge/blob/main/static/js/app.js

https://github.com/DanielYoon92/belly-button-challenge/blob/main/StarterCode/static/js/app.js

### Understanding Bubble Charts:

Plotly. (n.d.). Bubble Charts in JavaScript. JavaScript documentation. Retrieved from: https://plotly.com/javascript/bubble-charts/

### Understanding layout configuration: 
Plotly. (n.d.). JavaScript Figure Reference: layout. JavaScript documentation. Retrieved from: https://plotly.com/javascript/reference/layout/

### Display each key-value pair:
StackOverflow user jo_va. (2019, February 24th). How to display both key and value in object using javascript? StackOverflow. Retrieved from: https://stackoverflow.com/questions/54851645/how-to-display-both-key-and-value-in-object-using-javascript

### Color Scales:
Plotly. (n.d.). Colorscales in JavaScript. JavaScript Documentation. Retrieved from: https://plotly.com/javascript/colorscales/
