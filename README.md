## Web-application for psychogeography "Dérive".

<!-- ![](https://dérive.stranno.su/design.png){ width=50% } -->

<p align="center">
  <img src="https://dérive.stranno.su/design.png" width="200">
</p>

https://dérive.stranno.su

Stack: HTML5, Sass, jQuery, Leaflet, Gulp

## What is psychogeography?

Psychogeography refers to the study of the influence of the territorial environment, often urban, on a person's
behaviour, emotions and feelings, and also the study of unfamiliar areas within urban space.

A person, when leaving home on the street, always has a specific motive, which he directs. If there is no motive, a person may never visit different parts of the city for
useless. Within the framework of modern perception, freedom is practiced as a vicious circle in which a person
turns around: every day, by one and the same theme
in the same way, a person moves from home to work (school), and then comes back
home. He doesn't usually realize that he can go out of the house
in any direction. Thus, wherever a person goes, the street appears to be a tunnel between two rooms, which is
desirable to overcome as soon as possible.

The main technique of study is dérive ("drift") — unmotivated movement around the city, in which a person
is perceiving the familiar and tired terrain anew.
The drift can be algorithmic and non-algorithmic. That is, drift can
to be performed according to a predetermined algorithm, which is
a set of actions (tasks) that need to be performed or repeated, or may be directed solely in terms of
their sensual sensations that determine the direction of movement (urban planning). Within the limits of this
program, it is possible to tell, the algorithmic drift is realised, it is possible to tell,
only the algorithm is defined not by a person at his discretion, but by a program which is an external independent
force in relation to him. That is, the transfer of one's own subjectivity to the program is realized.

## How does the application work?

The kernel of the application is the screen-manager.js file that uses the jQuery library. This code manages the only HTML file that describes the "screens" (pages) that are hidden and displayed if necessary.

The application gives commands to the user by directing him/her through the city. These commands are usually based on the Math.random() method, which generates pseudo-random numbers, which are then used to form the corresponding commands.
