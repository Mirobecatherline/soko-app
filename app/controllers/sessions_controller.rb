class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    def create

        buyer=Buyer.find_by(username: params[:username])
        if buyer&.authenticate(params[:password])
            session[:buyer_id]=buyer.id
            render json: buyer , status: :ok
        else
            render json: {error:"invalid username or password"}, status: :unauthorized
        end
    end
    def destroy
        session.delete :buyer_id
        head :no_content
    end
    private
    def render_not_found_response
        render json: {error: "buyer not found"}
    end
end
