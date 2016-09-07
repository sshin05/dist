
class AppComponent extends React.Component {
    // constructor () {
    //     super();
    //     this.state = {
    //         numChildren: 1
    //     };
    // }

    // render () {
    //     const children = [];

    //     for (var i = 0; i < this.state.numChildren; i += 1) {
    //         children.push(<ChildComponent number={i} />);
    //     };

    //     return (
    //         <ParentComponent addChild={this.onAddChild.bind(this)}>
    //             {children}
    //         </ParentComponent>
    //     );
    // }

    // onAddChild () {
    //     this.setState({
    //         numChildren: this.state.numChildren + 1
    //     });
    // }
    render() {
        //const clipsAdded = addmoreClips();

        return (
            <div>
            <h1>Media Fragments</h1>
               <video controls width="720px" height="540px">
                    <source src="sintel_trailer-480.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
               </video>
               <h2>Clips</h2>
             <div id="clips">
                <ClipComponent />
              </div>
              <FormComponent />
              </div>);
    }

}


class ClipComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false
        };
        //this.handleClick = this.handeClick.bind(this);
    }

    handleClick() {
        this.setState({liked: !this.state.liked});
    }

    render() {
        const text = this.state.liked ? 'liked' : 'havent liked';
        return (
            <div className="clip" data-start="0" data-end="52" data-id="0" onClick={this.handleClick}>Full Video</div>
        );
    }
}



class FormComponent extends React.Component {
    // getInitialState() {
    //     return {value: 'Hello!'};
    // }

    

     render () {
         return (<form id="clipHandler">
                <input name="clipName" value="Clip Name" />
                <input name="starttime" value="Start Time" />
                <input name="endtime" value="End Time" />
                <input type="submit" value="Add Clip" />
                <input type="submit" value="Edit Clip" />
                <input type="submit" value="Delete Clip" />
              </form>);
     }
}



ReactDOM.render( <AppComponent />, document.getElementById('main') );