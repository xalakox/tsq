var fs = require('fs');
var csv = require('csv');

var filter = [];
for (var a=0;a<process.argv.length;a++){
	if (a>1){
		filter.push(process.argv[a]);
	}
}

var ret = {};

// opts is optional
//var opts = ;

csv()
.from.path(__dirname+'/Time\ Sink\ Report.csv', { delimiter: ',', escape: '"' })
.transform( function(row){
  row.unshift(row.pop());
  return row;
})
.on('record', function(row,index){

	if (filter.length>0){
		var done = false;
		for (var i=0;i<filter.length;i++){
			if ((row[2].toLowerCase().indexOf(filter[i]) !== -1 || row[3].toLowerCase().indexOf(filter[i]) !== -1) && !done){
				var d = new Date(row[0]*1000);
				var dateString = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
				if (ret[dateString]){
					ret[dateString] += parseFloat(row[0]) - parseFloat(row[4]);
				}else{
					ret[dateString] = parseFloat(row[0]) - parseFloat(row[4]);
				}
				done = true;
			}
		}
	}
  //console.log('#'+index+' '+JSON.stringify(row));
})
.on('end', function(count){
  // when writing to a file, use the 'close' event
  // the 'end' event may fire before the file has been written
  console.log('Number of lines: '+count);
  console.log("---------\nBy Date\n---------");
  console.log(JSON.stringify(ret));
  //getting total 
	if (ret!={}){
		var total = 0;
		for (key in ret) {
			total += ret[key];
		}
		console.log("---------\nTotal\n---------");
		console.log(total/60/60+" hours");
	}else{
		console.log("Nothing found :(");
	}
})
.on('error', function(error){
  console.log(error.message);
});
// Output:
// #0 ["2000-01-01","20322051544","1979.0","8.8017226E7","ABC","45"]
// #1 ["2050-11-27","28392898392","1974.0","8.8392926E7","DEF","23"]
// Number of lines: 2