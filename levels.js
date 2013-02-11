var levels=[
	{
		description:"<div><h1>Over view</h1><p>Welcome to the 2D Turing engine! We will figure out how its work throught a series of case.</p><p>First lets make you confortable with the engine.</p><p>You can see on the main panel two maps, with a cursor on each. The one on top is the instruction map, the second is the tape map. You probably already know everything about the 2D Turing engine, if not there is a little resume. During one step of the engine, the system will read what it has to do on the instruction map, each symbol is an instruction ( don't worry these are pretty simple! ), and report the result of the instruction on the tape map. These are the symbols you can use : <ul><li>arrows which make the instruction cursor move, by default the engine read instruction from left to right.</li><li>arrows which make the tape cursor move</li><li>bunck of colors that dont make anything</li></ul>Now lets go to the serious ones, these are combinaisons of two symbols and are really usefull<ul><li>with the cross symbol, followed by a X symbol, you can write an X at the tape cursor place</li><li>you can read the symbol pointed by the tape cursor on the tape map, if the symbol red is the same that the one that follow the circle, the instruction cursor will continue its lecture, if not I will go to the bottom case instead.</li></ul>And I think you should have enought to go further now.</p><h2>Usage</h2><p>You got a tool box on your right side, this one has two mode. The editor mode allows you to modify the map with a bunch of cool tools, we will go back on theses later. Then, with the monitoring mode, you can launch and stop the engine or work step by step.</p><p>Lets work this out with an example. Try this little programm here, launch the engine and see how it's work.</p><p>Go to the next case when its done.</p>  <div>",
		writeManualInstruction:[{"x":11,"y":1,"s":3},{"x":10,"y":1,"s":3},{"x":9,"y":1,"s":3},{"x":8,"y":6,"s":4},{"x":8,"y":5,"s":6},{"x":8,"y":4,"s":6},{"x":8,"y":1,"s":11},{"x":7,"y":6,"s":4},{"x":7,"y":4,"s":14},{"x":7,"y":1,"s":14},{"x":6,"y":6,"s":4},{"x":6,"y":4,"s":1},{"x":6,"y":3,"s":6},{"x":6,"y":2,"s":6},{"x":6,"y":1,"s":2},{"x":5,"y":6,"s":4},{"x":5,"y":1,"s":3},{"x":4,"y":6,"s":4},{"x":4,"y":1,"s":3},{"x":3,"y":6,"s":5},{"x":3,"y":5,"s":5},{"x":3,"y":4,"s":5},{"x":3,"y":3,"s":5},{"x":3,"y":2,"s":5},{"x":3,"y":1,"s":3},{"x":3,"y":0,"s":6},{"x":2,"y":0,"s":3},{"x":1,"y":0,"s":3},{"x":0,"y":0,"s":3}],
		writeManualTape:[],
		writeManualInstructionSolution:[{"x":11,"y":1,"s":3},{"x":10,"y":1,"s":3},{"x":9,"y":1,"s":3},{"x":8,"y":6,"s":4},{"x":8,"y":5,"s":6},{"x":8,"y":4,"s":6},{"x":8,"y":1,"s":11},{"x":7,"y":6,"s":4},{"x":7,"y":4,"s":14},{"x":7,"y":1,"s":14},{"x":6,"y":6,"s":4},{"x":6,"y":4,"s":1},{"x":6,"y":3,"s":6},{"x":6,"y":2,"s":6},{"x":6,"y":1,"s":2},{"x":5,"y":6,"s":4},{"x":5,"y":1,"s":3},{"x":4,"y":6,"s":4},{"x":4,"y":1,"s":3},{"x":3,"y":6,"s":5},{"x":3,"y":5,"s":5},{"x":3,"y":4,"s":5},{"x":3,"y":3,"s":5},{"x":3,"y":2,"s":5},{"x":3,"y":1,"s":3},{"x":3,"y":0,"s":6},{"x":2,"y":0,"s":3},{"x":1,"y":0,"s":3},{"x":0,"y":0,"s":3}],
		writeManualTapeSolution:[],
		cursorInstruction:{x:0,y:0},
		cursorTape:{x:0,y:0},
		authorizerInstruction:{
			defaultValue:false,
			exceptions:[],
			cursorCtrl:false
		},
		authorizerTape:{
			defaultValue:false,
			exceptions:[],
			cursorCtrl:false
		},
		winTest:{
			tapeEquals:[{'x':0,'y':0,'s':14}],
		}
	
	},
	{
		description:"<div><h1>Your turn</h1><p>I will present you the smart editor. As you may guess thanks to it name, it really simple to use.<p>First thing to know is that not every cell is editable, for the need of this tutorial, we don't want you to mess up with everything. So all the case that have a grey background aren't editable.<p>The little programm below is mostly finished, some parts are missing.</p><p>Siwtch to editor mode in the toolbox, now you are able to move the cursor to modify the symbol in cells. Drag and drop the cursor to move it, note that in that exercise, it will be replace as you relaunch the engine. Double click on a cell to edit it. You can then either click on the symbole in the list, or use your keyBoard to type the keyword corresponding. Valid change by pressing enter. Navigate from cell to cell with the arrow pad.</p> <div>",
		writeManualInstruction:[{"x":17,"y":10,"s":4},{"x":17,"y":9,"s":6},{"x":17,"y":8,"s":6},{"x":17,"y":7,"s":6},{"x":16,"y":10,"s":4},{"x":16,"y":7,"s":11},{"x":15,"y":10,"s":4},{"x":15,"y":7,"s":9},{"x":14,"y":10,"s":4},{"x":14,"y":7,"s":15},{"x":13,"y":10,"s":4},{"x":13,"y":7,"s":1},{"x":12,"y":10,"s":4},{"x":12,"y":7,"s":9},{"x":11,"y":7,"s":14},{"x":10,"y":10,"s":4},{"x":10,"y":7,"s":1},{"x":9,"y":10,"s":4},{"x":9,"y":7,"s":3},{"x":8,"y":10,"s":4},{"x":8,"y":7,"s":3},{"x":7,"y":10,"s":4},{"x":7,"y":7,"s":3},{"x":6,"y":10,"s":4},{"x":6,"y":7,"s":3},{"x":5,"y":10,"s":5},{"x":5,"y":9,"s":3},{"x":5,"y":8,"s":5},{"x":5,"y":7,"s":3}],
		writeManualInstructionSolution:[{'x':11,'y':10,'s':4},{"x":17,"y":10,"s":4},{"x":17,"y":9,"s":6},{"x":17,"y":8,"s":6},{"x":17,"y":7,"s":6},{"x":16,"y":10,"s":4},{"x":16,"y":7,"s":11},{"x":15,"y":10,"s":4},{"x":15,"y":7,"s":9},{"x":14,"y":10,"s":4},{"x":14,"y":7,"s":15},{"x":13,"y":10,"s":4},{"x":13,"y":7,"s":1},{"x":12,"y":10,"s":4},{"x":12,"y":7,"s":9},{"x":11,"y":7,"s":14},{"x":10,"y":10,"s":4},{"x":10,"y":7,"s":1},{"x":9,"y":10,"s":4},{"x":9,"y":7,"s":3},{"x":8,"y":10,"s":4},{"x":8,"y":7,"s":3},{"x":7,"y":10,"s":4},{"x":7,"y":7,"s":3},{"x":6,"y":10,"s":4},{"x":6,"y":7,"s":3},{"x":5,"y":10,"s":5},{"x":5,"y":9,"s":5},{"x":5,"y":8,"s":5},{"x":5,"y":7,"s":3}],
		writeManualTape:[],
		writeManualTapeSolution:[],
		cursorInstruction:{x:5,y:7},
		cursorTape:{x:0,y:0},
		authorizerInstruction:{
			defaultValue:false,
			exceptions:[{x:11,y:10},{"x":5,"y":9}],
			cursorCtrl:false
		},
		authorizerTape:{
			defaultValue:false,
			exceptions:[],
			cursorCtrl:false
		},
		winTest:{
			cursorInstruction:{"x":5,"y":8},
		}
	
	},
	{
		description:"<div><h1>Getting started<h1><div>",
		writeManualInstruction:[{"x":29,"y":8,"s":5},{"x":29,"y":7,"s":4},{"x":28,"y":8,"s":14},{"x":28,"y":7,"s":4},{"x":27,"y":9,"s":4},{"x":27,"y":8,"s":2},{"x":27,"y":7,"s":4},{"x":26,"y":9,"s":5},{"x":26,"y":8,"s":10},{"x":26,"y":7,"s":4},{"x":25,"y":8,"s":13},{"x":25,"y":7,"s":4},{"x":24,"y":8,"s":1},{"x":24,"y":7,"s":4},{"x":23,"y":7,"s":4},{"x":22,"y":9,"s":4},{"x":22,"y":8,"s":2},{"x":22,"y":7,"s":4},{"x":21,"y":9,"s":5},{"x":21,"y":8,"s":9},{"x":21,"y":7,"s":4},{"x":20,"y":8,"s":11},{"x":20,"y":7,"s":4},{"x":19,"y":8,"s":14},{"x":19,"y":7,"s":4},{"x":18,"y":9,"s":4},{"x":18,"y":8,"s":2},{"x":18,"y":7,"s":4},{"x":17,"y":9,"s":5},{"x":17,"y":8,"s":10},{"x":17,"y":7,"s":4},{"x":16,"y":7,"s":4},{"x":15,"y":8,"s":1},{"x":15,"y":7,"s":4},{"x":14,"y":8,"s":13},{"x":14,"y":7,"s":4},{"x":13,"y":8,"s":2},{"x":13,"y":7,"s":4},{"x":12,"y":8,"s":10},{"x":12,"y":7,"s":4},{"x":11,"y":7,"s":4},{"x":10,"y":9,"s":4},{"x":10,"y":8,"s":2},{"x":10,"y":7,"s":4},{"x":9,"y":9,"s":5},{"x":9,"y":8,"s":9},{"x":9,"y":7,"s":4},{"x":8,"y":8,"s":12},{"x":8,"y":7,"s":6}],
		writeManualTape:[{"x":11,"y":1,"s":13},{"x":10,"y":1,"s":13},{"x":9,"y":1,"s":13},{"x":8,"y":1,"s":13},{"x":7,"y":1,"s":13},{"x":6,"y":1,"s":13},{"x":5,"y":1,"s":13},{"x":5,"y":0,"s":13},{"x":4,"y":1,"s":13},{"x":4,"y":0,"s":13},{"x":3,"y":1,"s":13},{"x":3,"y":0,"s":13},{"x":2,"y":1,"s":13},{"x":2,"y":0,"s":13},{"x":1,"y":1,"s":13},{"x":1,"y":0,"s":13},{"x":0,"y":1,"s":14},{"x":0,"y":0,"s":14}],
		cursorInstruction:{x:8,y:7},
		cursorTape:{x:0,y:0},
		authorizerInstruction:{
			defaultValue:true,
			exceptions:[],
			cursorCtrl:false
		},
		authorizerTape:{
			defaultValue:false,
			exceptions:[{x:5,y:5}],
			cursorCtrl:false
		},
		winTest:function(map){return false;},
	
	},
	
];