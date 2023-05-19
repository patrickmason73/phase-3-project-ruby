class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
  
    get '/philosophers' do 
        philosophers = Philosopher.all
        philosopher.to_json
    end

    post '/comments' do
        new_comment = Comment.create({
            comment: (params[:comment]), 
            quote_id: (params[:quote_id])
        })
        new_comment.to_json
    end

    patch '/comments/:id' do
        comment = Comment.find(params[:id])
        comment.update({
            comment: (params[:comment])
        })
        comment.to_json
    end
end