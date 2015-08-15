
module Api
  class HourlyUsagesController < ApplicationController
    def index
      @data = HourlyUsage.all 

      render "index.json.jbuilder"
    end

    def show
      @data = HourlyUsage.where(account_id: params[:id])

      render "show.json.jbuilder"
    end

    def account_ids
      @account_ids = HourlyUsage.select(:account_id).distinct

      render json: @account_ids
    end
  end
end
