tool
extends KinematicBody2D

export(int) var speed = 200
var adresse = "res://Assets/MST"
var rng = RandomNumberGenerator.new()

func _ready():
	rng.randomize()
	$Sprite.texture = load(adresse + str(rng.randi_range(1,10)) + ".png")
	$CollisionShape2D.shape.extents = Vector2($Sprite.texture.get_size().x / 2, $Sprite.texture.get_size().y / 2)
	position.y = -100
	position.x = rng.randi_range(get_viewport_rect().position.x, get_viewport_rect().size.x)

func _physics_process(_delta):
	if Engine.editor_hint:
		return
	if position.y > get_viewport_rect().size.y:
		queue_free()
	else:
		var movement = Vector2.ZERO
		movement.y = speed + int($"../".score)
		movement = move_and_slide(movement)

func hit():
	queue_free()
