[Boilerplate Introduction](intro.md)

CSS
=========

This section provides information on the CSS files provided with the boilerplate.


The **start-up boilerplate** provides the following files:

- normalize_custom.css
- main.css
- media.css

##normalize_custom.css
This is a combination of general resets from [Eric Meyer's](http://meyerweb.com/eric/tools/css/reset/) `reset.css` to help browsers render elements to their initial defaults and a trimmed version of [Nicholas Gallagher's](http://necolas.github.io/normalize.css/) `normalize.css`, from which I have reset some of the normalized elements which made more sense for most of my projects.

##main.css
All the project related styles should go into this file if the project is small. However this file can be divided into further component based files.


There are 2 default rules provided in this file as below for easy calculation of `em` over `px`by providing 16px to `html` and then providing 62.5% to the body. Using this method `em` can be calculated by 10px instead of 16px. So 20px would be 2em. 


##media.css
All the media queries based styles would go in this file. 

There are some general break points and some print styles already provided in the file, which can be used as they are or can be customized as required for the project.
