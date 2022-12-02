extends KinematicBody2D

export(int) var speed = 300
signal hit()

func _process(delta):
	var direction = Vector2(0, -speed)
	move_and_slide(direction)
	if get_slide_count() > 0:
		var collision = get_last_slide_collision()
		connect("hit", collision.collider, "hit")
		emit_signal("hit")
		queue_free()
	elif position.y < get_viewport_rect().position.y:
		emit_signal("hit")
		queue_free()
