extends Control

var animation = false

func _process(delta):
	if animation:
		$TextureRect2.rect_position.x -= delta * 200
		if $TextureRect2.rect_position.x < get_viewport_rect().size.x / 2 + $TextureRect2.rect_size.x / 2:
			var cg = load("res://ChoixGenre.tscn")
			$"../".add_child(cg.instance())
			queue_free()

func _on_Button_pressed():
	animation = true
