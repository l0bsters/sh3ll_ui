var w = 960,
    h = 640,
    node,
    link,
    root;

var force = d3.layout.force().on("tick", tick).charge(function (d) {
    return d.children ? -120 : -60 * Math.sqrt(d.size);
}).linkDistance(function (d) {
    return 80;
}).size([w, h - 160]);

var vis = d3.select("body").append("svg").attr("width", w).attr("height", h);

root = source;
root.fixed = true;
root.x = w / 2;
root.y = h / 2;
update();

function update() {
    nodes = flatten(root);
    links = d3.layout.tree().links(nodes);
    updateLinks();
    updateNodes();
}

function updateLinks() {

    force.links(links).start();

    link = vis.selectAll("line.link").data(links, function (d) {
        return d.target.id;
    });

    // Enter any new links.
    link.enter().insert("line", ".node")
        .attr("class", "link")
        .attr("x1", function (d) {
        return d.source.x;
    }).attr("y1", function (d) {
        return d.source.y;
    }).attr("x2", function (d) {
        return d.target.x;
    }).attr("y2", function (d) {
        return d.target.y;
    });

    link.exit().remove();

}

function updateNodes() {

    force.nodes(nodes).start();

    node = vis.selectAll(".node").data(nodes, function (d) {
        return d.id;
    });

    // Enter any new elements.
    var container = node.enter().append("g").attr("class", "node")
    .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    }).call(force.drag);
    container.append("circle").attr("r", radius).style("fill", color).on("click", click);
    container.append("text").style("text-anchor", "middle");

    // update radius and text
    node.selectAll("circle").transition().attr("r", radius).style("fill", color);
    node.selectAll("text").text(function (d) {
        return !d.children ? d.name : null;
    });

    node.exit().remove();
}

function tick() {
    link.attr("x1", function (d) {
        return d.source.x;
    }).attr("y1", function (d) {
        return d.source.y;
    }).attr("x2", function (d) {
        return d.target.x;
    }).attr("y2", function (d) {
        return d.target.y;
    });

    node.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    });
}

function radius(d) {
    return d.children ? 8 : Math.max(15, Math.sqrt(d.size));
}

// Color leaf nodes orange, and packages white or blue.
function color(d) {
    return d._children ? "#3182bd" : d.children ? "#c6dbef" : "#fd8d3c";
}

// Toggle children on click.
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update();
}

// Returns a list of all nodes under the root.
function flatten(root) {
    var nodes = [],
        i = 0;

    function recurse(node) {
        if (node.children) node.size = node.children.reduce(function (p, v) {
            return p + recurse(v);
        }, 0);
        if (!node.id) node.id = ++i;
        nodes.push(node);
        return node.size;
    }

    root.size = recurse(root);
    return nodes;
}
