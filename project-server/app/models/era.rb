class Era < ActiveRecord::Base
    has_many :philosophers
    has_many :quotes, through: :philosophers
end