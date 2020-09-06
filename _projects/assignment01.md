---
layout: post
title: 
team: 
date_visible: 
image: 
formats: "formats,formats"
permalink: /assignment01/
description: 
---


# Assignment 01 mapping where things are

Due: September 23, 2020

This assignment is an introduction to basic functions of working with vector spatial data in QGIS. Topics covered include:

- adding data
- inspecting the attribute table of a feature layer
- creating points from latitude and longitude coordinates
- selecting by attributes
- selecting by location
- setting the project projection & reprojecting data
- adding basic map elements in the print composer

## Assignment Deliverables

To receive credit and feedback on this project please upload the following to canvas by 9/23.
One .txt file containing answers to the following questions. Please use the format shown below:

Last name, First Name
Assignment 01

How many parcels list an owner address from outside Newark?  
Your answer

How many parcels in Newark's West Ward list an owner address from outside Newark?  
Your answer

How many parcels in Newark's North Ward list an owner address from outside Newark?  
Your answer

How many properties marked as vacant in the 2017 vacancy survey are located on parcels where the owner's address is outside Newark?  
Your answer

One map of Newark in the style of a USGS Topographic Map. For this map please consider
[XXXXXXXXXX]
File names should follow this naming convention exactly:
`lastname_firstname_assignment01`

## Part 01: adding data

Open QGIS3.10 and create a new project
![new project]

From the top menu bar select `Layer` and then `Add Layer` > `Add Vector Layer`.  

When the `Data Source Manager` menu appears select the Source Type as `File` then click on the `...` and navigate to the data folder for this assignment. Select the **Tran_road_centerline_NJ.shp** file. Take care to select the file with the **.shp** file extension. QGIS will do the work of interpreting the full shapefile and will pull the projection and database information from the other files in the roads folder.

![add data]

You may receive a dialog box prompting you to select a datum transformation. Choose the `Preferred` option and select `Okay`. 

**SAVE** your project.

Follow the same process as above to add the remaining datasets within the data folder for this assignment. Add all of the data sets **except** for the .csv file in the **newark_vacant** folder.

The layers added will each be assigned a random color -- that will be different from the colors in the screenshot below.

![initial map]

**SAVE** your project.

Use the zoom and pan buttons in the tool bar to navigate to a location of interest in Newark.

![zoom]

Adjust the layer order and visibility so that you can see the tax parcels layer. The check box next to each layer determines whether or not it is visible in the map canvas. The order of the layers in the `Layers` panel determines the order of the layers in the map canvas. 

![reorder layers]

### Basic data queries: who owns Newark?
How many tax parcels list an owner address from outside of Newark? We'll use the `newark_tax_parcels` dataset to find out. 

Select the tax parcels layer in the Layers panel. Select the `Identify Features` tool, and then click on an individual tax parcel (a *feature*) on the map canvas to inspect the attributes of individual features in the tax parcels layer.

Notice the rows of information that appear in the `Identify Results` panel. These are the values for one row within the attribute table for the Newark tax parcels layer -- i.e. the values for one feature in the tax parcel feature class. Each row in the attribute table corresponds to one feature on the map. 
![identify]
Now lets open the full attribute table for the tax parcels. 

Right click on the tax parcels layer in the `Layers` panel. Select `Open Attribute Table`. 

![Attribute table open]

Notice all of the fields (i.e. columns) in the attribute table. The `_OWNERADD2` field contains the city and state of the address listed for the recorded owner of the tax parcel. We will use this field to select all parcels where this field does not contain the word **NEWARK**.

![attributes]

Click the `Select/filter features using form` tool and make the following selections, then click select features.

![Select non newark]

To return to the table view click the `Swith to table view` button in the bottom right. 

![view selection non newark]

Click the `Show selected features` option in the bottom left to see all the selected features. 

How many tax parcels appear to be owned by entities who do not reside in newark? This is visible in the top bar of the attribute table. **Note this answer, you will be required to turn it in with your assignment.** 
<!-- 12984 is answer -->

![selected parcels answer]
 
Now lets create a new field (column) in the attribute table that indicates that the owner's address is not located in Newark so we can access this information more easily in the future. 

To do this use the `Field calculator`, accessed via the button circled in yellow in the screenshot above.  

Once you have the `Field calculator` open make the following selections to create a new field (column) which indicates that the owner's address is not in newark. This column will be called **Not_local** it will be of the **Text (string)** type we will make it **22** characters long and fill it manually with the value **owner not local** by typing `owner not local` in the expression window. Then click `OK`

![field calculator not local]
Creating a new field turned on **Editing mode** automatically. To save our changes click the `Save edits` button (floppy disk with a pencil), then click the `Toggle editing mode` button (pencil icon) both of these buttons are at the top of the attribtue table window. 
Click the pencil icon 

### Data queries by location
Now lets use some of the spatial capabilities of GIS to find out: how many tax parcels have owners with non-Newark addresses in the West Ward of Newark? 

First change the layer order to bring the wards layer to the top. Zoom out to see all of Newark by right clicking on the wards layer and selecting `Zoom to layer`

So that we can see what is below the wards in the map, we will change the symbology of the wards layer. Right click again on the wards layer, then select `Layer properties`. Select the `Symbology` menu. Adjust the fill and stroke options to set a transparent fill and a bold stroke in a noticeable color. 

![symbology menu options]

Manually select WEST Ward using the `Select features` tool. 
![wards colors]

Now navigate to the `Vector` menu on the top bar and then `Research tools`>`Select by location` and make the following selections exactly.

![select by location]

Zoom in to see that only parcels within the West Ward remain selected.

![zoom west]
How many parcels in the West Ward have owners with a non-Newark address? **Note this answer you will be required to turn it in with your assignment.** <!-- 2950 is answer -->

**On your own** repeat the steps above but for North Ward. **Note this answer you will be required to turn it in with your assignment.**

### Creating a point layer from lat/lon
Next we will add a new dataset containing the latitude and longitude coordinates for vacant parcels identified by a survey of Newark in 2017. We will investigate which vacant properties have non local owners.

Select `Layer`>`Add Layer`>`Add delimited text layer` options. Then in the dialog window that opens make exactly these selections: 

![delimited text options]

To save these points as a new dataset right click on the points layer that was created and select `Export`>`Save features as`

![export]

Make exactly these selection in the `Save vector layer as...` menu.

![export options]

Remove temporary vacant lots dataset: right click on layer name and select `Remove layer`

Clear any/all selections you currently have using the `clear selections` tool.

### Queries part 2: How many vacant properties are on tax parcels with a non-newark owner listed?

Open the attribute table for the Newark parcels layer. We will use the `Not_local` column we created before to construct a quick attribute query. 

Click the `Select by expression tool` (looks like a yellow square with a purple E on it). Expand the `fields and values` options, double click on `Not_local` and it will appear in the expression window. Then double click `All unique` to get all of the unique values for the field in the expression window. Double click `owner not local` that appears. Click select features. Close the attribute table. 
![expression not local]
Next we will select the vacant properties that fall within these tax parcels using the select by location tool. Navigate to `Vector`>`Research tools`>`Select by location`. Select exactly these options from the menu
![select location vacant]

How many vacant properties have listed owners whose address it outside Newark? **Note this answer you will be required to turn it in with your assignment.** 
<!-- 365 lots selected  -->
Bonus question: what percentage of the total vacant parcels included in the survey is this? **Note this answer you will get extra credit if you supply the correct answer.**

## Part 02: working with coordinate reference systems

There are multiple different ways that coordinate reference systms impact a project in QGIS. 

First it is important to understand that both datasets (layers) and the map canvas/QGIS project each have coordinate reference systems (and they may not always be the same). 

To view the coordinate reference system (CRS) of a layer open the Layer properties menu for the layer, select the `Information` menu and inspect the CRS. All of the layers in this assignment should have `EPSG:3424 - NAD83 / New Jersey (ftUS) - Projected`. This is a **projected** coordinate reference system. It is name for the State Plane projection designed for New Jersey, it used the **North American Datum** (NAD) of **1983**. The units are **US Feet**. The EPSG code is 3424. EPSG is an acronym for European Petroleum Survey Group, the organization that has helped to codify and catalog coordinate reference systmes from around the globe. It is important to notice and pay attention to which kinds of entities are well enough resourced to undertake such efforts...

To set the project CRS based on a layer right click on the layer name and then `CRS`>`set project crs from layer`.

To view the CRS of your map project select `Project`>`Properties`  then select the `CRS` menu.

![project crs]

You can change this to be different from the CRS for the data layers in your project. See what happens. When you're done return it to `EPSG:3424`. 

Changing the CRS for the map project just changes how the data appears. It does not change anything about the underlying data. 

To change the CRS for a layer we need to **reproject** it. 

Select `Vector`>`Data Management Tools`>`Reproject Layers`. Make the following selections

![reproject]

A new temporary layer will be added to your project. Otherwise nothing appears to have changed. Check the CRS for the new layer in the layer properties menu.

To see what this new CRS looks like select the temporary layer and then select `CRS`>`set project crs from layer`. The image will be skewed. Zoom out to see the full state of New Jersey

![reproject project]

To undo this and return to an appropriate CRS. Using `Project`>`Properties`  then select the `CRS` menu and selecting `EPSG:3424`.

![reproject project back]

Remove the 'reprojected' temporary layer

**Note** an alternative way to reproject data is to save a new feature layer and when exporting select a different CRS. For an individual layer select `export` > `save features as` > and choose a different CRS when exporting. 

## Part 03: Composing a map

This next section walks you through the basic functions of the print composer in QGIS. For your assignment you will need to turn in a designed map, that copies the style of one of the USGS topographic series maps. Before you begin this section review the example maps from the USGS. Sample maps are saved in the precedents folder on the course GoogleDrive, and also can be downloaded directly for an area you are interested in from the [USGS here](https://ngmdb.usgs.gov/topoview/viewer/#4/40.00/-100.00).

**Map composition section forthcoming....**
<!-- 
20. print composer open
note relevant portion of the QGIS docs which has an indepth overview of all functionalities is [here]
21. change page size of print composer 
22. set scale 1-24000 refers to one map unit is 24000 units on the ground

23. add scale bar
24. add text scale
25. add north arrow
26. add legend
27. change legend titles

Add a graticule
1. using the select move item tool select the map again
1. item properties 
2. scroll down to 'grids' section > green + to add a new grid -- name the grid EPSG 3424 (the CRS of the map). 
3. select modify grid
4. make these selections: for CRS `EPSG: 3424`; interval `map unit`; x `5000` y `5000`
5. scroll down to Draw coordinates. select the check box. for Format select `degree, minute` 
6. leave the grid item properties menu with the blue arrow at the top of the properties menu
7. create a new grid. name it WGS84. select modify grid make the following selections:
crs `EPSG: 4326` this is WGS 84 it is a geographic coordinate system. i.e unprojected. 
interval `map unit`
x & y as `0.03`
so that you can distinguish with the other graticule change the color by selecting the Line dropdown menu
scroll to enable Draw Coordinates. Format as `degree, minute` 
change the font color to match the color you chose for the lines
`Grid enabled` toggles visibility for the grid

notice difference between the two graticules]

## Style your map layers
At this point in the assignment you may either (1) export your map and continue to design it in the software program of your choice (Illustrator is a good option) or (2) use the layer symbology menus for the layers in your map project to modify and design your map. Skip to the appropriate section here based on your choice. 

## A, export map and work in a graphics editing program
1. adjust the placement of your map within the map window so that has the extents and scale you would like for your final map. 
2. make note of the extents for your map window (write these down in case you need to reexport a layer later this way your export will be perfectly aligned) 
3. export your print composer as an SVG
4. continue to edit and compose in illustrator

## B, continue to edit using QGIS 
1. in your QGIS project edit the layer symbology using the menu within the layer properties panel for each layer
2. return to the print composer use the refresh view button to view the changes you just made to the map within the print composer -->

[new project]: ../assets/images/assignment01/00_start.png
[add data]: ../assets/images/assignment01/00.png
[initial map]: ../assets/images/assignment01/01.png
[zoom]: ../assets/images/assignment01/04.png
[reorder layers]: ../assets/images/assignment01/05.png
[identify]: ../assets/images/assignment01/06.png
[Attribute table open]: ../assets/images/assignment01/07.png
[attributes]: ../assets/images/assignment01/08.png
[Select non newark]: ../assets/images/assignment01/09-1.png
[view selection non newark]: ../assets/images/assignment01/09-2.png
[selected parcels answer]: ../assets/images/assignment01/10.png
[field calculator not local]: ../assets/images/assignment01/12.png
[symbology menu options]: ../assets/images/assignment01/14.png
[wards colors]: ../assets/images/assignment01/15.png
[select by location]: ../assets/images/assignment01/16.png
[zoom west]: ../assets/images/assignment01/17.png
[delimited text options]: ../assets/images/assignment01/18.png
[export]: ../assets/images/assignment01/19.png
[export options]: ../assets/images/assignment01/20.png
[expression not local]: ../assets/images/assignment01/22.png
[select location vacant]: ../assets/images/assignment01/23.png
[project crs]: ../assets/images/assignment01/02_reproject.png
[reproject]: ../assets/images/assignment01/03_reproject.png
[reproject project]: ../assets/images/assignment01/05_reproject.png
[reproject project back]: ../assets/images/assignment01/04_reproject.png

[]: ../assets/images/assignment01/
[]: ../assets/images/assignment01/
[]: ../assets/images/assignment01/
[]: ../assets/images/assignment01/
[]: ../assets/images/assignment01/
[]: ../assets/images/assignment01/
[]: ../assets/images/assignment01/
[]: ../assets/images/assignment01/
[]: ../assets/images/assignment01/
