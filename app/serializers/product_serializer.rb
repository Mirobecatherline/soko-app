class ProductSerializer < ActiveModel::Serializer
  attributes :id, :product_name, :product_image_url, :product_description, :quantity, :price, :subscribe, :admin_id, :buyer_id, :review_id, :wishlist_id
end
