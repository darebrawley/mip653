---
layout: post
title: 
team: 
date_visible: 
image: 
formats: "formats,formats"
permalink: /assignment04/
description: 
---

# Assignment 04: Mapping Proximity and Concentration

In this assignment you will work with two new geographic concepts: proximity and concentration. 

You will be introduced to multiple analytical methods through a series of examples related to the geographies of contaminated sites in Newark and surrounding counties. Building on skills encountered in Assignment 03 you will add additional analytical methods to your arsenal. As this is the last weekly assignment of the semester you will be required to execute skills covered in previous assignments on your own with fewer step by step instructions.

## Deliverables 
Upload answers to numbered questions (these appear throughout the text and are reproduced here) and your map composition that follows requirements described in the "Symbology & Map Composition" section to canvas by **11/4**.  

Questions:  

1. **What are the linear units of the census tract layer?**
2. **Why does the formula divide the area given by the geometry of the data layer by 43560?** (hint: this is related to converting from the units of the census tract layer to acres)
3. **In your own words, what is the Modifiable Areal Unit Problem? And how is it relevant to the density maps you have produced here?**

Text responses should be saved as a .txt file, and maps as .pdf, .jpg, or .png files. Use the naming convention: 
`lastname_firstname_assignment04`

Deliverables for part b (also due 11/4 will be posted by 10/28).

## Data download

Before you begin download the required data from the course Google Drive Folder [here](https://drive.google.com/open?id=1xSRKJG7sPA-kH1GkRQu851hkqRtvJr-o)


## Part A: Density of Contaminated sites

In part A you will use three different methods for calculating the density of [Known Contaminated Sites](https://gisdata-njdep.opendata.arcgis.com/datasets/known-contaminated-site-list-for-new-jersey) in Newark and surrounding counties:  

- Density of sites by census block for Newark
- Density of sites by census tract for Newark
- Kernel density for sites in Essex, Union, and Hudson Counties

In conducting this comparison you will experience first hand the impacts of the modifiable areal unit problem discussed in class. 


Add the datasets that will be used for part A of this assignment:

- Known contaminated sites from NJ DEP. (Please familiarize yourself with this dataset by viewing its metadata [here](https://gisdata-njdep.opendata.arcgis.com/datasets/known-contaminated-site-list-for-new-jersey))
- Census tracts with population information join for Newark
- Census blocks with population information join for Newark

![01]

Use a spatial join to **count** the number of known contaminated sites within each census block. Remember from assignment 3: if we are joining information from the contaminated sites to the census blocks, then the input layer is census blocks and the join layer is contaminated sites. The tool name (remember from assignment 3) is `Join attributes by location (summary)` and you can access the tool via the `Processing Toolbox`. Select `OBJECTID` as the field to summarize and `count` as the summary to calculate. Create a new folder you create within the data folder for this assignment called **processed**, save the `joined layer` as **contaminated_join_blocks.geojson**.

![02]

Once the new layer is added to your map check the attribute table to be sure that the spatial join was successful (you can sort by `OBJECTID_count` field by clicking on it to see which block has the most sites).

![03]

Repeat the same steps above but for the census tracts. Save this `join layer` as save the `joined layer` as **contaminated_join_tracts.geojson**.

Remove the original tract (`tl_2010_tracts_newark_pop`) and block layers (`tl_2010_blocks_newark_pop`) from your map project to keep things organized. 

### Calculate area and density

Use the field calculator to add a new field that contains the area of each census tract in acres.

1. **What are the linear units of the census tract layer?**
2. **Why does the formula divide the area given by the geometry of the data layer by 43560?** (hint: this is related to converting from the units of the census tract layer to acres)
3. **In your own words, what is the Modifiable Areal Unit Problem? And how is it relevant to the density maps you have produced here?**
![04]

The attribute table should have a new column added: 

![05]

Now again use the field calculator to add a new field that contains values for the density of contaminated sites as sites/acre for each tract: 

![06]

Repeat the above steps to calculate the density of contaminated sites for each census block. 

### Kernel density 

Next you will visualize concentrations of contaminated sites using a heat map or kernel density map. 

This is a raster based method for visualizing density of a phenomena across an area. As described in class this is a method whose results are highly dependent on the parameters you choose. Depending on parameters a kernel density map of the same data can look wildly different. The value of a kernel density map is primarily in visualization (not numeric output). One goal for this component of the assignment is to make you very suspicious of 'heat maps' which you encounter from other sources. 

In creating a kernel density there are two main parameters: 

- the search radius from each feature
- cell size of the output raster

![kernel1]
You can think of the search radius as a kind of 'zone of influence' for each feature. Thus this radius should be chosen with some knowledge of the local geography and the impact of the feature. In other words, for the case of our example how far away from contaminated site do I need to be before it no longer has any effect on me. 

For each point a smooth surface is fitted over the point which is at its maximum above the point and reduces in value as it approaches the specified search radius. At the radius it is zero. This is illustrated in the diagram below: 
![kernel2]

The value for each output kernel density raster cell is the sum of the values for each kernel surface at the centroid of the cell: 

![kernel3]

Now to execute this in QGIS:

In the `Processing Toolbox` under `Interpolation` open the `Heatmap (Kernel Density Estimation)` tool. Make the following selections and save your output raster with a file name that indicates the search radius and cell size in the **processed** folder for this assignment (i.e. `contam_r10007_p40ft.tif`). 

As a starting point use a 1000 ft search radius (note the units of the search radius are always the same as the units of the coordinate reference system of the input point layer), and 40ft for the cell size. 

![07]
The output raster should look like this: 

![08]

Experiment with different search radii and cell sizes (perhaps doing research on legislation related to distance from contaminated sites) until you have a kernel density raster that you feel makes the argument you would like to make about contaminated sites in Newark and its surroundings. 


### Symbology & Map Composition

Symbolize both the tracts and the blocks as choropleth maps using a manual classification scheme based on natural breaks. **Make sure to use the same breaks in the data for both maps to allow for comparison between the two maps.**

Use a single band pseudocolor ramp to visualize your chosen kernel density map.

Create a single map composition with three maps that shows the density of contaminated sites by block and by tract side by side. Use the same geographic extents and scale for each map 

Include on your map composition:  

- title 
- subtitle for each map
- legend (that shows the units for the density values in each choropleth map & that includes the search radius for the chosen kernel density map)
- scale bar
- annotation showing the 3 census tracts & census blocks with the highest density of contaminated sites
- layers to give context to your map reader from any of the previous assignments (roads, building footprints, etc)


## Part B: Proximity to Contaminated sites  

Will be added in advance of class on 10/28





---
[01]: ../assets/images/assignment04/01.png
[02]: ../assets/images/assignment04/02.png
[03]: ../assets/images/assignment04/03.png
[04]: ../assets/images/assignment04/04.png
[05]: ../assets/images/assignment04/05.png
[06]: ../assets/images/assignment04/06.png
[07]: ../assets/images/assignment04/07.png
[08]: ../assets/images/assignment04/08.png
[kernel1]: ../assets/images/assignment04/kernel1.png
[kernel2]: ../assets/images/assignment04/kernel2.png
[kernel3]: ../assets/images/assignment04/kernel3.png