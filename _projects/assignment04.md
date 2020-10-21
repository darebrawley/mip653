---
layout: post
title: 
team: 
date_visible: 
image: 
formats: "formats,formats"
permalink: /assignment03/
description: 
---

# Assignment 04: Mapping Proximity and Concentration

In this assignment you will work with two new geographic concepts: proximity and concentration. 

You will be introduced to multiple analytical methods through a series of examples related to the geographies of contaminated sites in Newark and surrounding counties. Building on skills encountered in Assignment 03 you will add additional analytical methods to your arsenal. As this is the last weekly assignment of the semester you will be required to execute skills covered in previous assignments on your own with fewer step by step instructions.

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

![04]

The attribute table should have a new column added: 

![05]

Now again use the field calculator to add a new field that contains values for the density of contaminated sites as sites/acre for each tract: 

![06]

Repeat the above steps to calculate the density of contaminated sites for each census block. 

### Symbology & Map composition

Symbolize both the tracts and the blocks as choropleth maps using a manual classification scheme based on natural breaks. Make sure to use the same breaks in the data for both maps to allow for comparison between the two maps.

Create a single map composition with two maps that shows the density of contaminated sites by block and by tract side by side.  

Include on your map:  

- title
- legend (that shows the units for the density values)
- scale bar
- annotation showing the 3 census tracts & census blocks with the highest density of contaminated sites


## Part B: Proximity to Contaminated sites  

Will be added in advance of class on 10/28





---
[01]: ../assets/images/assignment04/01.png
[02]: ../assets/images/assignment04/02.png
[03]: ../assets/images/assignment04/03.png
[04]: ../assets/images/assignment04/04.png
[05]: ../assets/images/assignment04/05.png
[06]: ../assets/images/assignment04/06.png