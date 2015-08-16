json.array! @products do |product|
  json.extract! product, :name, :efficiency, :image_url
end