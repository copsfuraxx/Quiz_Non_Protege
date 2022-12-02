extends Control

var main = preload("res://Main.tscn")

func _on_Button_pressed():
	var penis = preload("res://Penis.tscn").instance()
	penis.position = Vector2(get_viewport_rect().size.x / 2, get_viewport_rect().size.y - 50)
	var scene = main.instance()
	scene.add_child(penis)
	$"../".add_child(scene)
	queue_free()

func _on_Button2_pressed():
	var penis = preload("res://Vagin.tscn").instance()
	penis.position = Vector2(get_viewport_rect().size.x / 2, get_viewport_rect().size.y - 50)
	var scene = main.instance()
	scene.add_child(penis)
	$"../".add_child(scene)
	queue_free()
