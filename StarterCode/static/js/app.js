//1. Use the D3 Library to read in samples.jjson from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json

const url= "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
 
d3.json(url).then(function(data) {
    console.log(data);
   });

//2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
// Use sample_values as the values for the bar chart
// Use otu_ids as the labels for the bar chart
// Use otu_labels as the hovertext for the chart


//Create function to initialize webpage, store selDataset in dropdownMenu, populate the menu with options based on the names array and sets up the metadata, bar, and bubble charts
function init()
{
    let dropdownMenu = d3.select("#selDataset");
    d3.json(url).then((data) =>
    {        
        
        let names = data.names;        
        names.forEach((id) =>
        {
            console.log(id);
            dropdownMenu.append("option")
            .text(id)
            .property("value",id);
        });
        
        let sample_one = names[0];
        
        console.log(sample_one);
        createMetadata(sample_one);
        createBarChart(sample_one);
        createBubbleChart(sample_one);
    });
};

//Create function that builds and displays the barchart 
function createBarChart(sample) 
{
    d3.json(url).then((data) =>
    {
        let sampleInfo = data.samples;
        let value = sampleInfo.filter(result => result.id == sample);
        let valueData = value[0];
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;
        
        console.log(otu_ids,otu_labels,sample_values);
        
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0,10).reverse();
        let labels = otu_labels.slice(0,10).reverse();        
        let trace =
        {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };
        let layout =
        {
            title: "Top 10 OTUs"
        };
        Plotly.newPlot("bar", [trace], layout)
    });
};


//3. Use a bubble chart that displays each sample
// Use otu_ids for the x values
// Use samples_values for the y valies
// Use oti_ids for the marker colors 
// Use otu labels for the text values

function createBubbleChart(sample)
{
    d3.json(url).then((data) => 
    {
        let sampleInfo = data.samples;
        let value = sampleInfo.filter(result => result.id == sample);
        let valueData = value[0];
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;
        
        console.log(otu_ids,otu_labels,sample_values);        
        
        let trace1 =
        {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker:
            {
                size: sample_values,
                color: otu_ids,
                colorscale: "Jet"
            }
        };
        
        let layout =
        {
            title: "Bacteria Per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
        };
        Plotly.newPlot("bubble", [trace1], layout)
    });
};

//4. Display the sample metadata, i.e., an individual's demographic information.
//5. Display each key-value pair from the metadata JSON object somewhere on the page.

function createMetadata(sample)
{
    d3.json(url).then((data) =>
    {
        let metadata = data.metadata;
        let value = metadata.filter(result => result.id == sample);

        console.log(value)

        let valueData = value[0];
        d3.select("#sample-metadata").html("");
        Object.entries(valueData).forEach(([key,value]) =>
        {
            console.log(key,value);

            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
};

//6. Update all the plots when a new sample is selected
function optionChanged(value)
{ 
    console.log(value); 
    createMetadata(value);
    createBarChart(value);
    createBubbleChart(value);
};

//Initialize webpage
init();



