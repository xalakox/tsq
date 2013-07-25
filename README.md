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
By Date
---------
2013-6-18 : 0.41517499996556173 hours
2013-6-19 : 0.6511305558019215 hours
2013-6-20 : 2.3524361111058125 hours
2013-6-21 : 0.7544416666693158 hours
2013-6-22 : 0.5299583327770233 hours
2013-6-23 : 0.022288888759083216 hours
2013-6-24 : 2.6050111103720135 hours
2013-6-25 : 0.23395277798175812 hours
2013-6-26 : 2.251949999663565 hours
2013-6-27 : 0.4014027776983049 hours
2013-6-28 : 0.6217388892173766 hours
2013-6-29 : 0.15124722215864395 hours
2013-7-1 : 3.896811110575994 hours
2013-7-2 : 0.7253527781036165 hours
2013-7-3 : 0.2224555557966232 hours
2013-7-4 : 1.0295833330684239 hours
2013-7-5 : 0.996405555208524 hours
2013-7-6 : 0.02899166663487752 hours
2013-7-8 : 0.42864166643884444 hours
2013-7-9 : 0.1422194445795483 hours
2013-7-10 : 0.05715000033378601 hours
---------
Total
---------
18.518344442910617 hours

```

By default it will search for a file called "Time Sink Report.csv" wich is the default export name for Time Sink
