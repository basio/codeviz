
// ---------------------------------------------------------------------------------------------------------------------
// VisualizerViewFactory
// ---------------------------------------------------------------------------------------------------------------------

this.VisualizerViewFactory = {

	//VIEWS
	visualizerView: _visualizerView,

}//VisualizerViewFactory

// ---------------------------------------------------------------------------------------------------------------------
// FUNCTIONS
// ---------------------------------------------------------------------------------------------------------------------

function _visualizerView() {

	var visualizer = new Famous.MeteorSurface({
        template: Template.visualizer,
        size: [undefined, undefined],
        properties: {
            backgroundColor: 'white'
        }
    });

    return visualizer;
}

// ---------------------------------------------------------------------------------------------------------------------
// END
// ---------------------------------------------------------------------------------------------------------------------