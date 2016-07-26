var wrapper = document.getElementById('wrapper');

rivets.formatters.percent = {
  read: function(value) {
    return (value / 100).toFixed(2)
  },
  publish: function(value) {
    return Math.round(parseFloat(value) * 100)
  }
}

rivets.bind(wrapper, {model: { value: 0 }});