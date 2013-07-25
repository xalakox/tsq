tsq
===

Time Sink Query will help you filter the reports from TimeSink app (http://manytricks.com/timesink/), and get a day by day hour usage and a total based on the search string, it will search the window title and app names.

Node.js is required (http://www.nodejs.org/) and the csv package (npm install csv)

You can setup Time Sink to auto-export to the same folder this app resides and to auto-reset everyday to keep peformance; this script will pick up all csv files to build the report.

Example Setup : 

![Export Setting](http://salvador.aceves.mx/jing/2013-07-25_1307.png)
![Reset Setting](http://salvador.aceves.mx/jing/2013-07-25_1309.png)

Important !, first do an export then setup the reset otherwise you will loose all previous data.


Example Usage : 

```
node tsq.js photoshop illustrator youtube facebook
```

Example Return : 

```
---------
By App
---------
iTerm 0.6663499995072683 hours
Sublime Text 2 3.4902222224738866 hours
Google Chrome 1.754466665122244 hours
Finder 0.054474999772177804 hours
SourceTree 0.0689111112223731 hours
FileZilla 0.016519444518619114 hours
---------
By Date
---------
2013-7-1 : 0.30089444438616436 hours
2013-7-2 : 0.7023750003841188 hours
2013-6-20 : 0.315058333211475 hours
2013-6-21 : 0.0014222221904330785 hours
2013-7-3 : 0.20739722198910185 hours
2013-7-4 : 0.0012999999523162842 hours
2013-7-8 : 0.10541388895776536 hours
2013-7-9 : 0.0005861111481984456 hours
2013-7-10 : 0.0004361110925674438 hours
2013-7-13 : 1.9561138882239661 hours
2013-7-15 : 0.29296111080381604 hours
2013-7-11 : 0.00014444443914625379 hours
2013-7-16 : 0.8265083328220579 hours
2013-7-17 : 0.2881000006198883 hours
2013-7-18 : 0.21424166646268633 hours
2013-7-19 : 0.37651111053095926 hours
2013-7-20 : 0.012011111113760208 hours
2013-7-22 : 0.060838888883590694 hours
2013-7-23 : 0.1694222221771876 hours
2013-7-24 : 0.2167416665951411 hours
2013-7-14 : 0.0024666666322284273 hours
---------
Total
---------
6.050944442616569 hours

```

By default it will search for a file called "Time Sink Report.csv" wich is the default export name for Time Sink
