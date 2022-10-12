class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :product_name
      t.string :product_image_url
      t.string :product_description
      t.integer :quantity
      t.integer :price
      t.string  :subscribe
      t.integer :admin_id
      t.integer :buyer_id
      t.integer :review_id
      t.integer :wishlist_id
    end
  end
end
