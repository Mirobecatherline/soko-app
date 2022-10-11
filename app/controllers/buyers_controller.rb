class BuyersController < ApplicationController
    def create
        buyer=Buyer.create(buyer_params)
        if buyer.valid?
            session[:buyer_id]=buyer.id
            render json: buyer, status: :created
        else
            render json: { errors: buyer.errors.full_messages }, status: :unprocessable_entity
        end
    end
    def show
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :buyer_id
        buyer=Buyer.find_by(id: session[:buyer_id])
        render json: buyer, status: :ok
      
    end
    private

    def buyer_params
        params.permit(:username,:email,:password, :password_confirmation)
    end
end
