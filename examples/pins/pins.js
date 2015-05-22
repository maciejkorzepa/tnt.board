var pins_theme = function () {

    var theme = function (board, div) {
	var axis_track = tnt.board.track()
	    .height(0)
	    .background_color("white")
	    .display(tnt.board.track.feature.axis()
		     .orientation("top")
		    );
	var pin_track = tnt.board.track()
	    .height(60)
	    .background_color("white")
	    .display(tnt.board.track.feature.pin()
		     .domain([0.3, 1.2])
		     .foreground_color("red")
		     .on_click(function (d) {
			 console.log(d);
		     })
		    )
	    .data(tnt.board.track.data()
		  .update(
		      tnt.board.track.data.retriever.sync()
			  .retriever (function () {
			      return [
				  
				  {
				      pos : 200,
				      val : 0.5
				  },
				  {
				      pos : 355,
				      val : 0.8
				  },
				  {
				      pos : 100,
				      val : 0.3
				  },
				  {
				      pos : 400,
				      val : 1
				  }
			      ]
			  })
		  )
		 );
	board
	    .add_track(axis_track)
	    .add_track(pin_track);
	board(div);
	board.start();
    };

    return theme;
};