
class Product < ActiveRecord::Base
  validates :name, :efficiency, presence: true
end
