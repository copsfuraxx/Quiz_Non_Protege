extends Node

onready var mst = preload("res://MST.tscn")
var spawn = 1.0
var timer = .0
var rng = RandomNumberGenerator.new()
var score = 0

func _ready():
	rng.randomize()

func _physics_process(delta):
	score += delta
	if timer <= .0:
		for i in rng.randi_range(1, min(5, rng.randi_range(1, max(int(score/5.0), 1)))):
			var m = mst.instance()
			add_child(m)
		timer = spawn
	else:
		timer -= delta

func _process(_delta):
	$Label.text = str(int(score))
