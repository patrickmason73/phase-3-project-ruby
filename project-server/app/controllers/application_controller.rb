class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get '/philosophers' do 
        philosophers = Philosopher.all
       json_format(philosophers)
    end

    post '/comments' do
        new_comment = Comment.create({
            comment: (params[:comment]), 
            quote_id: (params[:quote_id]),
            user: (params[:user])
        })
        new_comment.to_json
    end

    delete '/comments/:id' do
        comment = Comment.find(params[:id])
        comment.destroy
        comment.to_json
    end

    patch '/comments/:id' do
        comment = Comment.find(params[:id])
        comment.update({
            comment: (params[:comment])
        })
        comment.to_json
    end

    def json_format(philosophers)
        philosophers.to_json(include: [{quotes: {include: :comments}}, :origin])
    end
end