class AddNewColumns < ActiveRecord::Migration
  def change
    add_column :usages, :toilet, :integer, null: false
    add_column :usages, :shower, :integer, null: false
    add_column :usages, :laundry, :integer, null: false
    add_column :usages, :kitchen, :integer, null: false
    add_column :usages, :other, :integer, null: false
  end
end
