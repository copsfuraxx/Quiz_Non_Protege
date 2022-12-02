extends KinematicBody2D

export(int) var speed = 500
var projectil = preload("res://Tir.tscn")
var tir = true

func _physics_process(delta):
	if get_slide_count() > 0:
		var _var = get_tree().change_scene("res://DeathMenu.tscn")
	var movement = Vector2.ZERO
	if Input.is_action_pressed("left"):
		movement.x -= speed
	if Input.is_action_pressed("right"):
		movement.x += speed
	if not position.x + movement.x * delta > get_viewport_rect().size.x\
	and not position.x + movement.x * delta < get_viewport_rect().position.x:
		movement = move_and_slide(movement)
	
	if Input.is_action_just_pressed("shoot") and tir:
		var t = projectil.instance()
		t.position = position
		t.connect("hit", self, "hit")
		$"../".add_child(t)
		tir = false

func hit():
	tir = true
