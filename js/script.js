(function(){

var KatexRender = React.createClass({
  render: function() {
    var html = { __html: katex.renderToString(this.props.latex) };
    return <div dangerouslySetInnerHTML={html} />;
  }
});
  
var AnswerButton = React.createClass({
  render: function() {
    return (
      <div className="pure-u-1-2">
        <button className="button-xlarge pure-button">
          <KatexRender latex={this.props.latex} />
        </button>
      </div>
    );
  }
});
  
var AnswerChoices = React.createClass({
  render: function() {
    var buttons = this.props.choices.map(function(latex, i) {
       return <AnswerButton key={i} latex={latex} />
    });
    
    return <div className="pure-g">{buttons}</div>;
  }
});
  
React.render(<KatexRender latex="\sin \frac{3\pi}{4} = ?" />,
             document.getElementById('question'));

var answers = [
  "\\frac{\\sqrt{2}}{2}",
  "\\frac{1}{2}",
  "\\frac{\\sqrt{3}}{3}",
  "\\frac{-\\sqrt{2}}{2}"
];

var ltx = {
  sqrt: function(n) {
    return "\\sqrt{" + n + "}";
  },
  
  frac: function(n, d) {
    return "\\frac{" + n + "}{" + d + "}";
  },
  
  neg: function(exp) {
    return "-" + exp;
  }
}
  
var N = (function() {
  var x = {
    '0': "0",
    '1': "1",
    '1/2': ltx.frac(1, 2),
    'sqrt(2)/2': ltx.frac(ltx.sqrt(2), 2),
    'sqrt(3)/2': ltx.frac(ltx.sqrt(3), 2),
  };

  for (var key in x) {
    x['-' + key] = "-" + x[key];
  }
  
  return x;
})();

var postions = {
  '0': [N['1'], N['0']],
  'pi/6': [N['sqrt(3)/2'], N['1/2']],
  'pi/4': [N['sqrt(2)/2'], N['sqrt(2)/2']],
  'pi/3': [N['1/2'], N['sqrt(3)/2']],
  
  'pi/2': [N['0'], N['1']],
  '2pi/3': [N['-1/2'], N['sqrt(3)/2']],
  '3pi/4': [N['-sqrt(2)/2'], N['sqrt(2)/2']],
  '5pi/6': [N['-sqrt(3)/2'], N['1/2']],
  
  'pi': [N['-1'], N['0']], 
  '7pi/6': [N['-sqrt(3)/2'], N['-1/2']],
  '5pi/4': [N['-sqrt(2)/2'], N['-sqrt(2)/2']],
  '4pi/3': [N['-1/2'], N['-sqrt(3)/2']],
  
  '3pi/2': [N['0'], N['-1']],
  '5pi/3': [N['1/2'], N['-sqrt(3)/2']],
  '7pi/4': [N['sqrt(2)/2'], N['-sqrt(2)/2']],
  '11pi/6': [N['sqrt(3)/2'], N['-1/2']],
}
  
React.render(<AnswerChoices choices={answers} />,
             document.getElementById('answers'));

})();