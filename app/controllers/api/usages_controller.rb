
module Api
  class UsagesController < ApplicationController
    def index
      @data = Usage.where(account_id: params[:account_id])

      render "index.json.jbuilder"
    end

    def account_ids
      @account_ids = Usage.select(:account_id).distinct

      render json: @account_ids
    end
  end
end