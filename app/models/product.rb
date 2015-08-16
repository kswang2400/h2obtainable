
class Product < ActiveRecord::Base
  validates :name, :efficiency, :image_url, presence: true
end
