class SessionsAdminController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    def create

        admin=Admin.find_by(username: params[:username])
        if admin&.authenticate(params[:password])
            session[:admin_id]=admin.id
            render json: admin , status: :ok
        else
            render json: {error:"invalid username or password"}, status: :unauthorized
        end
    end
    def destroy
        session.delete :admin_id
        head :no_content
    end
    private
    def render_not_found_response
        render json: {error: "admin not found"}
    end
end
