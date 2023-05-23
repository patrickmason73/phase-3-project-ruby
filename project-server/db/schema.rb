# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_05_23_042725) do

  create_table "comments", force: :cascade do |t|
    t.text "comment"
    t.integer "quote_id"
    t.string "user"
  end

  create_table "eras", force: :cascade do |t|
    t.string "title"
  end

  create_table "origins", force: :cascade do |t|
    t.string "name"
  end

  create_table "philosophers", force: :cascade do |t|
    t.string "name"
    t.integer "origin_id"
    t.integer "era_id"
    t.text "img"
  end

  create_table "quotes", force: :cascade do |t|
    t.text "quote"
    t.integer "philosopher_id"
    t.integer "origin_id"
    t.integer "era_id"
  end

end
