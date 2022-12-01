extends Node

onready var mst = preload("res://MST.tscn")
var spawn = 1.0
var timer = .0

func _physics_process(delta):
	if timer <= .0:
		var m = mst.instance()
		add_child(m)
		timer = spawn
	else:
		timer -= delta
