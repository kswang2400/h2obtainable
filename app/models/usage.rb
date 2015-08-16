
class Usage < ActiveRecord::Base
  validates :month, :account_id, :consumption,
    :toilet, :shower, :laundry, :kitchen, :other, presence: true
end
