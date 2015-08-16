# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150816023001) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hourly_usages", force: :cascade do |t|
    t.string   "account_id"
    t.integer  "consumption"
    t.string   "hour"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "hourly_usages", ["account_id"], name: "index_hourly_usages_on_account_id", using: :btree
  add_index "hourly_usages", ["hour"], name: "index_hourly_usages_on_hour", using: :btree

  create_table "usages", force: :cascade do |t|
    t.string   "account_id",  null: false
    t.integer  "consumption", null: false
    t.string   "month",       null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "toilet",      null: false
    t.integer  "shower",      null: false
    t.integer  "laundry",     null: false
    t.integer  "kitchen",     null: false
    t.integer  "other",       null: false
  end

  add_index "usages", ["account_id"], name: "index_usages_on_account_id", using: :btree
  add_index "usages", ["month"], name: "index_usages_on_month", using: :btree

end
