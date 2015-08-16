class AddNewColumns < ActiveRecord::Migration
  def change
    add_column :usages, :toilet, :float, null: false
    add_column :usages, :shower, :float, null: false
    add_column :usages, :laundry, :float, null: false
    add_column :usages, :kitchen, :float, null: false
    add_column :usages, :other, :float, null: false
  end
end
