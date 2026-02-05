import React from 'react'
import './style.css'

const ViewUsers = () => {

    const list_scientists = [
        { 
            url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQNaJUKM4W5Nim3gI954owkjQZbJBj0S1_279yzLPmrz4LO0E226L3q0BnrZG_jQ8MDmjh1g3wRvZDH0Wscfu10Zd2-qpPIEKJTiRb8JVt3yTkFS9F53VbJ8b2pSBGjPKwOQFrILreE7WQ&s=19", 
            name: "Антуан Лавуазье", 
            discovery: "Закон сохранения массы", 
            age: 50, 
            subject: "Химия", 
            isPremium: "Премиум" 
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTlWEl8uHDS8CggqFO1SMgWKZT1qJeJ1afNaj3yN1sCS-Getyjs-3fz-78Ot-G4Y8DmUzv8lX-pAUle5U74Y23GU5xxT6gekxMfxWG1DbDgZqUpCpUWV9xcXr8h8RaFz50m35lSzqRd9dHi&s=19", 
            name: "Дмитрий Менделеев", 
            discovery: "Периодическая таблица", 
            age: 72, 
            subject: "Химия", 
            isPremium: "Премиум"
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTRJYWnVzEyZhjNHvpNSoxC0XrH5HXliWVooMNJygt285oaB6YG3kpA1_5IcM9BdtLmO2PzIs_jLS7pQzY-afl72TtuAIngAWa-iOdDh35Ta-sIb_FJbhE2pLmn6EmQVaL4zmyI3yxnK_TS&s=19", 
            name: "Мария Кюри", 
            discovery: "Радиоактивность", 
            age: 66, subject: "Химия/Физика", 
            isPremium: "Премиум" 
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWl21Rc8RnPMoB4rNW22MmPmQqnxlmg9DnmjvFq-gupU1rUfHXMhpo8LzhR87np6yAh3YQOj_2xRqQzN3nv748WuKrkkIf7BAQr5LywfoS6Q&s=10", 
            name: "Джон Дальтон", 
            discovery: "Атомная теория", 
            age: 77, subject: "Химия", 
            isPremium: "Премиум"
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIg1ArUK0W9Rfik0AC4bha82wPnO1UMld1-0MZ-JnRPjZl2T_gNHfJ9cZzotiwGwjC6vARmdvvnQNCa15FHCpAf3QNeZhefhiU7yeIfj5Zw&s=10", 
            name: "Роберт Бойль", 
            discovery: "Закон Бойля-Мариотта", 
            age: 64, subject: "Химия", 
            isPremium: "Премиум" 
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8hXc9TSwy-wbZRyn6Zux-JzTLAWU1_qAwjReRnhNJ1Kyku_iE1PLVUs5jKbOdzz8NsQH6JOq_O85J-04-CxUS_-kzqjw8KTXySJxSeWshg&s=10", 
            name: "Линус Полинг", 
            discovery: "Природа химической связи", 
            age: 93, subject: "Химия", 
            isPremium: "Премиум"
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQY3G61hapiq8-JqjG-DbA5fd7O770ln58IT95jbBJ1o7E3Kl7Uovi4i86dfa7mwhnwucJWzRCvD3iIBgLWhD4QAufTBZal-K6hQ-QHAHDxnF8WtgFEJJZvZ90lfFvzJCPWIXow2bZGuLvu&s=19", 
            name: "Луи Пастер", 
            discovery: "Стереохимия и пастеризация", 
            age: 72, subject: "Химия/Биология", 
            isPremium: "Премиум" 
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPNdBA_A-Ee5gCpkb8K-nqt92yE5RaCcXfmKFGeoIJoC4OkqByGBxG_6mTQp_8YVOEjcc2DhVxq9790T5MsDmvv8k4ho05P6oETk8eC69&s=10", 
            name: "Александр Бутлеров", 
            discovery: "Теория строения органических веществ", 
            age: 57, subject: "Химия", 
            isPremium: "Премиум" 
        },
        { 
            url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxoYGBgYGB0YHRsbGh0XHRoYGhoaHSggGholGxgaIjEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OFQ8PFy0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQwAvAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAIFBgEHAAj/xAA6EAABAwIDBgQFAwQBBAMAAAABAAIRAyEEMUEFElFhcfCBkaGxBhMiwdEy4fEHFEJSIzNygrJikqL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREx/9oADAMBAAIRAxEAPwCL6sFRbUJUKrLk2XWCNVGB2VICmKx80sDHTv1UidfugaFVFFRKt9+5RqYQH3+aNTdFglYk5ojc0U4x3BGFdJ0x90SvUbT/AF6/pETOSCxouJ5o9+Kp/wC9gSSRwjMHolK22cgC54vxBzjdyUNaNtQC5N+ZR6eI/KxJxkg/MyaSIkzlOY6wlcVtUsEtkEfTEmRPoQJGfFU16XSqm3Hqi/MMEH915th/iXFUqQPy/mZSTaQefJaDZfxbSxBDWndfaWuz6Dioa1rXKTHHjdIU6x0Rt/3nqimt/iVwm+aVL9dNERlSTMeOaLo1R5GqgytF/uhVbm3ugipyRLR31TP3QTWlDc89O+CjvIa8/c2V8G3m+XFfE+/dl0mcslWUS3qp0qRRGnRTaEHWsU4XWjgvgii0x39lKpUa0S8wXGwhDLnNbvAFxGQHFMUnEsmo0kxlFiPcIjm5VJgf+pkDmQUdzA1uV9Sb21hJ/Dbq7XEPJ3TnqfAXMBG24wNaXSIN4uJ4kIJYjFUnDdfBkZ68lHD4Zm/ABIOd8iRn4H3Xne0dqFz2mnUJAMwcjyPULS7O2w7ca4iHRGd5yi1ug6ING/Z7HQXCDqeOnfRVOI+H4c8OgyDFrH9MmOl/BLv2i8MkmNL58SQNbR1hZ7Ebfq5NdAzjL0QbXZ8brqUTuQfPQjhKznxLsT5QFam0C5yMWbeZAtn6JHCfELxUFSJdG6//AFe3iRmDbJaXZmOY6k5rg6+8L5jeBG9w4eiDvwf8VOcW0q2ZJDXDWBN78FuhUkey8ix+z203yANSODWgCSeB3iPNbr4P2t86i2SS5ogk5+PBFjSGrxRcO8RbLu6TY6fBEDgopkPzv3yQDUC4XwOS+3hHfREQc66GXHRTdc8EFxHZQYabkhSbmoudnzPdlyk7kfFVBRY92zsmGvFuPeiXOiI0+KA7nKVN0uA/johPdN+ClQfBnhnyQHwuKa+o5v0AtFwDfVO4mo43BytGfjJyVBgMS01SAzM3NgZvBvmrt5fkAOUkfdAfAPY2mZAbBubmSb+P7LN7crfMLrk2icmnSON56Kyw+JNJtc1A17pbuiZnw6mwGcKsoVH4pj2GkD9Ih7R+mSfpMZxGeiDEbPwRfVFMSQXCbZTn7+i9Gq7OAobrmjebAJAF8oJnWyJ8K/DjqbSSIIIGUzzlaPaGBIYQKZc50TnHmBmisThWuqD5ectjeGQz14clSH4fcZdb9V//ACyPfFbzZOxKlOoHFkAky3lwWhxOxA4AtF4H0nlkmmPMjsnec14NwCDwJEjzUGY8BwYNWC+lsxyturVbTwDmTaA3egxckjQarBYjCk1AMuJOfPoMkRLbe1GuptA/Wd6RycQT5QAvvhPa3ysRmQypYgmb2E28lR7Ue1phpDvtf7m880DCViC0h0EOaRy3Sg96oO4cvNME3SmDq/QCYnl0RnzZRU3OUWlce7vzUN4fugJNv3UQSoOdxPeiHJGiDGONyutC+AAlEYeHoqiQH8r5wiFwHNEyQd0sk9svf8vdad2SN52oA4cSTZPAR36qr+JqDnUxuxMnWLQR5oIYXFsIYKQJDXhpcb7xJjqRK0WLqFgbuy58f62vx4BYzAUH0XUQ4wXWAM2OQtmcxfmt1s8OcCGySIbFgCRnfNBTVdi1nVRULhD4EAGQPW/NehbC2fTp02tDY0ytZIYKgdz6humdPXJX+BY0QFGoeo4Zs2bB90UxIso4d4nPoiyCR4or5lNt18+m26+ZSzuLhD3o69hBV7XwrHtyBPeXNYLbvwrLS5p8CB2Y5r0DEDVVWNB3ZOvv+ESvBtubJdRdBvJmft1tKrqZyGQJAJ5HM98F6f8AEmCDw4FvPx4rAbP2catdtIDMwTEgD+NFWXtOFA+W0C4DfHqiByFh6UNDRFgBbkpmLgmDkoru8Dfwn7LpgRBnUc0IAdfC1tVLe42VEpvbvquByjvFcGqgxe5B8bfj0Rqd+/woxwXaSqJkeUTkpsMrgcB3rquRKA+nXuSkdr7xpktzEHKcvcpxGwdMF26cjPtkgocVQ3qLX0xvGd8n9NgcxwWo2FVcwbzoDRqbAcx+Vlv7KrSqFrmzTFwXERBuR9Jnl9k/WPzadFkO+oWh0gng45+CDf0dpNc617Zi/irmhciIVBsjAbtNoOgV5TzgZKNQ7SYPFGdEpT58ZaBV2P2q5gJa2Otki1f03C88l88yTOSwJ+LawJLoa2by2wvxGnNS2V8eiqd0UarnTEACJ4SSqmtfiKIkSktpUhu+Kqdv7axFGkar8O1jZ1qguvkIDInxWOxH9QXPAAokAkiXOAEgCb8pBULVltylElZL4TB/v6h0LHTkIMtv3xU6vxmag3alItmwkH3K78F0WvxVauBbcaOYLon/ANfVVlvN+0DkQRaUMiT+V1oAuOekIbncZ4Iojhl3PQLo78VFzwTxhSI5IPiSDcd/Zdb4BRgkR+ym1tlFZID395XzR5KBJkmbKW8LX7hVlOO/upZ+ygH9V0IO2sptfB1Q3xbr4JvZzD/yPa0FzGEsDrjesGk9JlB1lZjiQ4FrgLhzSL/4uHG/BJUsO5tUOY7ebvfpyAn/AC6gjy4ra7OoPdRaMVuVHRmGx6fdVO1thbtRm4d1jj9TZtOnfJRWl2efpE+HRO/M/hJ4FsMHIAR0TNG5v+VFLYraG7AYAJuXOMNbzPHkFT7ax25RdVANSACXvkNl2Qa1t55881cTTcX7jA97DBBtB0/VpzCSqVaraLm1aTHGTIYJEG4aQc4Vg8vOOxNV7XHfaHOEBpJExMOB0g6rc1NgFrC9pLHgHcLIBFQixtmSWgFR2Xst1SoJDWNGQA08lrMBNSp+ktpUjbegfMdxAzDRzi6qSK/+omHc/AVJkuZuPJFj9BBcR5FeT08GcQ5zaILKdJpMNO7O7JLnGCXvdE5ctF71iqAe17TcOaWkciP3XidKg6hUfTMtLXEBwyIkxcXmNShWcbtAwbEUw4gb31gkaEEWNs1uvhvChkuAH1hpInIRqOKqxs9lSd+A0mbN3rnMkQATEZnVXOw3z8whu7TG61omSA0QJOunqiLve4oVXohl/wDPipSg6HQdOCM0nv3QrItN8d92RXd2xJ4KO8dPv9lB1QRB80RhI7CDIOq8vXRQ3ipONzznVDg9/lEHpOkQid/slmP89P2RgZ5ICA6BW2wbvc0/5MPoQVTFwHgmcDi/l1GuyAN+mqDY7QxpaN2k3eeRF5A6lMuw4fTG/Y2J8L+S+oOBhwuCJHOcuqZAjy1Uada2w4KW7eyhHBEaTKgjT3RXbe5pGegc30k+qZeyZCTt88X+o0nQOW+2b9U8HckVLB0GtvAunCJzVf8ANdkEntfbhw7Wn5VaqXGAKbZnqdFRdALEfE+BDKxdpU9CnaHxk4mKmEr0QGl01AwAWyP1SPJYTb3xmazw1rHbpOZEDwRLVxUwTGiRYcEDZTY3wJN8zzQKmNBZBty6pjZs7oOpv4Ksm38l8HCRw0QnP5aXn2XN4REevdkU5vLjKo0/dImqfD0Um1R3wRDbjBt5IrasiUg6oZ/KlSrwPwgoKgnPhnwUXEccl0a5ea4ByGXfVBwde/wjU3Age0IQH7rgOWsdgIDvyz8lEuBMRKi02FreGShx78UF3snbjqI3T9TNBq2eHJWe0fiylTpOqBr3uAMNjX8c1ki+M+/um9n1R8xk3+oTrY2+6GtzsLavz6NOtG7vsDi05tNpHUGVZUzdING7lYcAExTfpKiypPqj+4YI+r5LzPAb9MR1k+ieac5VXReP7jdi4ozPIvgjzhWLh+EWJ0H3uNUyLjNUe1cXUYA2lTNR+gkD1Ngq/GP2m+zKdCmI/wAqhcT4tbDUVz4q2H/c1abXAOpiS6+toHmvONp7GGHxBYHb1MOtGmueuaudsjaz2FgbQaBmWVbmOEhYirh8bTJLg0b0j9U+PPNVhqcRUhggSO+Ku6I3WtGgHlGqzOzAXfLBzBvHIflaRrusoDVLx4dfNQcQLTOSgI91wznE+nHNB1x74KIcu13kGCOHmobs63uipOfnF181/YX0aEr7eix8OiCnnjx7Mrk8LHmh1Kl+U5LjXzfqf5RB5sRz76Lm9J7CEHZZlfEgZT3rdAUDIdwumJM+eqC53HTvJdfU5Dv3KDpqgExn1uvm1N06nK/jyQ6lTOw5+ER7Ie/bvz80R6phXgsbaxA9kRjoPilNhPHyaX/aBdP1KYPryUawF9WMRRjJzKrTrcfLcy/QOsrNjvXVZraOILHUTMAVhNrQ5r259SFa0MWNe+aLFjbPX1Vdth9XdPygJ5/ZP4eoNLfdTrVGtgyivM9oYfaRkkhrdfpb5cT1WWeysHEvO87xytovWtt7QbuluVs9JXnW1sYJ3WwXEwLa6DmqxQ9gUyS551MD3P2CuqZvKVwVIMaBaR75k+aOHC5mOCAk9V0nlPTogvr3kKLqkxyz0QMvqjhmFCbA925d5oXzZ4TpyUDVvOY+57yQMOfeRfpf3U2VI1HmlWPGllKnzImeKCmJmQPD9pRGxrHolqohxE65RKMwelv29UEg69+xwXd3v36qIbmeqIW5cf44oFaj79LHopseDEnzvC6Wc78eiHucLnjCCTyOUlQaepnRSLc3H3On7Kz+FsM2riWg5N+o9QJv6Ilb/YuGNOmxjjJAE+SsHHRB3bqUSosJfEDWig50D6SxxnKA9pdPhKhU2RAPy3kGbA3H8J7FYYPY9hH0ua4R1H5X2Cqh9FjxP1Ma6/Me6NMvi/iJ+HO7VpOP/wAmwR5ZhJ1PjSm8fS650Id4aJ3b+FLz+clj8Rsvkft4+ZVZF2lt4PzfJ4AHwGizoxm9Va67iHTE3MdcrIuPwZbPDkIv+P2QvhLZlSvimxPyqTw57tJF2sHOYJQavA41lVjX0zLTcWjwM6opq+Xt+ViNhY0UcdWoA/Q+q8M5EONuUi3gFsqbhwQFOVrKAcBkM1yddVAjPmePc+CApcFExmoyNbmLwoNdnpdUGBHhousdzQZzi5jsqLbZAqCtql0m/Hu6PTEz6aeiA4GTGnNHpmALZZaoDAQPt0US6QSPBS3/AFy9UGc55Hy6IOznPfcoRibdjsLhryfc5+wStTaDW/pguvkbckDNSruiTlnx8BOaZ+AsfuVwXmN5zm303hY8rwFQ4qs805Jzd4DdvbxPohbNffUCc5jn7wiPfaXDRcLM+/BU3wptr+5ozH1t+moOf+w4g8VoQo1AqcyJ1SWy3A0oaZ3XPZw/Q5zSPRWApzxSOCYA6s1pmKrieReGvI9fVFL4jDSqx+zZm3mtEKZMJpmzspFuEqpjz93wk/EugH5dKfrfrGoYNXc8grPbeFoYDCP+W0U6dJv0jiTlc3c5xK24pxaIAEWXiP8AVv4oFap/bUjNOmfrIyc+4gRo33Kajy7EOcXF5d9W8STzmbeJXouw9p/PpB3+Qs8cDxjhqvP3iw5nQouDxj6Tt6m4gnPgeoOYQ16c15iPH91OTrKy2B+LWm1Vpaf9m3b5ZhXtDGMqAFjgRyKBqrcjI/hROvFffM7IUGk9lAWnUgG1usKLHDkoVHTnkuNeBlJ8ECL3APjn7/ZHLwLCRlx9VGowb05ge/D9krWxQaL3JHThmgfe63jny/Kr6+OazMyToM9UpXxT3DMAaDXzShpydZ+3DoiC18aXxoOCHSEaXzPryUm4aIPpnlzUqlOOOWaA+PZ/xUzpBd5nlpYIWEaBcT5RZN4pn/FTg5MAPg4/cJOiSLZXy5+eV0FzsbarsLWp1GG0HfaJ+pmojjrPFez4TFNqMa9hlrgCDyK8MLjEkTDc8/1HWOnotj/T34iLHf29Qwx16ZP+LtWk8DNuaNR6YyDE8OH3Sxwbd97m/qduzziRf0CYYPBZD4424KZGGp1Q19Rn/IZgspkjI/7PgtHASVGmp2fVYRLXteQ7dJBkAtzarJgXhfw98Tvw2LqOaN7D7+6aYiG02gAOb/8AJufMSvVts/EtHDYYYjfDmuAdTgx8yRIjllKJKR/qH8TjB0N1jv8AlfIbqWjV/rZfnrGneeSf9jyurb4h2y/E1H1arpc704AX8gqbEsBJv+cuKM26VJAt34qZZxPDvNd3ZgDObo9FkkCIzPgP3VRxuHtp91KhvU3BzHFp5W9NU+MNxHeqG+jfvsoLPZvxLpWH/k37hX+HxIN2mWnI59lYv5WVrLtDepmWktPL7hBtGnPTvgFFlQ6Rzuc1Q4XbRyqNuDO8PuOvBWtHENcJEEcZRSeLLnzGQ0mZQmUC0e/eaa2fiAQQQIjyix9fdM1aQIJi8dlEUNU6d9VPD3Iieht7L6sDJjw80XCWP27yQMtpCAScuGZyMT9knWdebwe7yncXYAW88uo8M1Wb9/fPlkgaxGMDGt3nQILTLXEXMyC0HibEcF3D4lrxLGVC3iAGjlG8b+SXD9LHrdNF1gSb5mPO0cL5IDkj5YcWuaTpM/SN6CYEXJPkly4kT6eojvRN48EkwQW6XsWjIg6iIuqylWhwFraZwivUNkf1Aptwb31/+rRa2AD/ANVzpDN3mSL8M151szZWJ2hiakOBru/5arnOIDZ/xmDGjQPwk8e7e3XFu8N8OIBLZEH6d4ZSLTpK9s+Ev7b5IfhWMZTNNrhFiGm8OJuXTMzeQUOvLtp/0/xeGpPfUfTbTyc5ri4ieRAsTZZvGYklrKTXncYN1snqTbISTK139Svi04ip8qmYpMNo/wAjkXH7cFgX1vNAMGCAb3Ajij4b67fLndEEh0ExkTY3slQd42BPIfwrDZNWGvMZu76IgTsI2b/NHQNf9wUfA0ZcXEENiGzaw46TqisdLotrKPSfAyuNOH5CAnyhx9/LldK12X7z4XR3TFkq95kQLjn2EE2STBGQie+i4+ieIynivqrt0TaExh3yPCbDn6oEzSOcx9vFRZRjVPVWgG2umqEWyTnnw/ZFO0xuveGz/sOhzHsrOhW+mb5Zc1VlxbUnwjOxOdtE48RIiJ4IhQP+ognzTGBpgujvml8OL6ReZT+HG6DziOmkIFMa4X0Mxb2KrKjiDcHz49FY41oyJj7qrrDXW+en28kB2v8ApPXh+U5QqiBlCqmusLzpwz1R6dPz90BKzt39BIablsS0n/tmxzO8CDzUBXgieMaf+32MHmV17wbWOnEZqNpjIHpHPrmgK6o25Otpi4PMG4Ij1KPsz4grUcPWoslrazg6BnaxjgDn4c1W02S76XQCYPID9V9W5200hAxu2CSRQbuA23o+oxax/wAQiu4tpbeq5tOdD9Tv/qMvGElUrsJ+hr3c3EAc7D8pRmHLja85/fPNW2BwwbHU3/ZERo0HO/Ud1v8AqwR/KcphrRawE858OOa+zy8fFQDr2nvqgK0X/fWy6Hwb+KhunsX/AIyRabvub+yCbyCBbzStR0HxP4CaaJiRqgYsjhz7hAPF1AWd96ouyqgIz5X48EpX/wCnOvP3hfbJdAF4j3QN7TxEEadUTC/U2ZPgkNqPbIiYtbyTNGuQAAgsdqOufcegsgsry0amIN9bo20AWkyI58fJVlCXOI4nKMreqC52bRkFxyyv7IrzcQOgQBWt8vPdz5mJ9CiOcb6fnqgXxZ4cLjPvRVlWcrck5XfFhY8fwk6jTPeUIB02m/pr3ojUnT9p8OCXqDie+HfJTZVz9uPBAzu658UKSIvlooB5tMcM0SgyT4hAPFfSx5b/AKEeEfuq3DYAu1jpyT+PeQ1wOe6f4RsEIEeOuvYsgGMMG7t+FzbrdEkC8R6ruKJtf0vbiUsKhsB32UDYZI0JGkcl9uRlkhMcSbC/VSe8zfTn5+CCZbe2Xr+FJjYvqUHeJ6RHLvJfOqQBoZ8igO+2uumelylcQ7xQ/nE5zdDrVDl3+yAdS7Zmcv491HA2t4HouOJgx2EOmXAAgcfVQGxMGOv4Vrgm/T1uqOo8kixzhWtMuI5aXhIo2Nx0k70gg6290vSxe7+k30PNWWPqU6glwg3z0zVFWp7p+k/SbDl+2Sqasdl1iTJuSbz5XVy+oMu+VlT7KeIMmwVqagIBBA48SgRruPATx4Sgb035cfX9kziAOmvXl1QBT1By46oAVcvXqgh948PyjPYMhmo06Y/Pfig+puvGQTdF30i3QR90FrPDQ/bwuuvgWnob9/ygFjHE5g3DhA5tMC/Ndw9ezY1aOPAcVB7gC05/UJnMX59VLDwGtvcACelvtCCWLqGL6JFlaP3+3ijYmpIIHfgly4QOE+F/BA3RqcO+ak13pp56pOk/TvwTAgA3jv3QTbV6xzS9Z3h4+qi8i3C/7INOM+yfYoGabtdFCtV5W5LlM8/L291CpA5RooIPqWjWO7+aiypEa9So7wAhQIyi9ieKA1GoC4TxlP0sbAgKqa3hnPZVjToiMvugvMbRH1HmYn9lQYrPPxV7j2zvA6X8VnHM65x3zQO4T9GdsxfkncHU+mSde7qqwY+mNLlXVNsAROQ9QqI1jeYv9+eigKdonLVSpN9/svi2x74oAVKWZjlz/K+pjn34om7Y9ez1UaVOSLnsoJgWHkM/RDeG+l+/umBS5nVLVm+oPv8AsgTxdm2vB8ewu79iM7nPiTI90tV/T69+aO5mYk2g/wD5ag4xusTl/KhUaMgfXzRiy+vcodQTfvRQD3eWveaORHBBpi4RzTsLnvTogXqg58fBCAPh5eaNWZY55kJWmz1VDNP30mYS75m2fDyU8OCYuc1Gs36iJP5yQDqtDbG54fk+K+YZjIrlVlyiU6cx0JRXcNT770TQq8usFApCwvqB7JhuHF81Ef/Z", 
            name: "Фриц Габер", 
            discovery: "Синтез аммиака", 
            age: 65, 
            subject: "Химия", 
            isPremium: ""
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUFE1Xip-aaNWXgYMhKloTwQvL158_Jeao5Zg3s0R_9ZQklxlE1CH8Saq244JchCGN05KvGQ3jE5mXnx9wBDL6LyaL9so9XF1J6ZrE3Ne&s=10", 
            name: "Альфред Нобель", 
            discovery: "Динамит", 
            age: 63, 
            subject: "Химия", 
            isPremium: ""
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMUH1cNFfbYy78uGkF5hsp_ugk-mPoqPji8Vd0FVy5oyZOj9P52AeRaK6-UALkA6eodmiwejPu5yPL0EtfUZRdcJzfSNWdcyBUVxZ-c7q&s=10", 
            name: "Амедео Авогадро", 
            discovery: "Закон Авогадро", 
            age: 79, 
            subject: "Химия", 
            isPremium: "Премиум"
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4w3uuu_T3ffEBeluYHiYx1KcZrS97udWSLxkQapABY5lxX1j-OOByux-24-1lnjwoE_w-6S1T0wHiDUDpm4D8njU_VUyzwj5vtQg_1bdag&s=10", 
            name: "Гамфри Дэви", 
            discovery: "Открытие калия и натрия", 
            age: 50, 
            subject: "Химия", 
            isPremium: "Премиум" 
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeiMqOUpk4yNjn1LCb3f5x68yjMC6JfqG37JrXGElhXzB25rXhdM-jnONpvXx49IccWmUERPD9h2NHCP6WWVqOhtOJTFaAoHhn180k-Xp&s=10", 
            name: "Сванте Аррениус", 
            discovery: "Теория электролитической диссоциации", 
            age: 68, 
            subject: "Химия", 
            isPremium: "" 
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5JYm3w4gMMbfeKEL4hYrJoHQPOEVC5nFKcpW-LPFcwfDcQ9S_HIF24W_qJw4-6CgQuQfzzVUlgxMzci5ANVxVGMNjDjPH0Mwn_dIS9Iiaw&s=10", 
            name: "Эрнест Резерфорд", 
            discovery: "Строение атома", 
            age: 66, 
            subject: "Физика/Химия", 
            isPremium: "" 
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRb024q4aCP7473QVFw6DBoo6JHkeiK_LWgIXZOppJ2fJvb8redblKXMuuIlgJtWlsyBYpcGOCBCHSg3RUSc26iJWRuPc2s0MdUUCjfDNVyACfDsr8BSrmlSOXugeKuveHHhlcMhdctaHs&s=19", 
            name: "Илья Пригожин", 
            discovery: "Диссипативные структуры", 
            age: 86, 
            subject: "Химия", 
            isPremium: "" 
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YUpKcmuhBbHiR3ioGnWmT9bLJji-fGpiaV3otCDOVCeVuAewPbBKhjjJU4CDxPtjHp6cUUIUaCFM16EIma3pf9mc-CELFeoiYEtWUjar&s=10", 
            name: "Джозеф Пристли", 
            discovery: "Открытие кислорода", 
            age: 70, 
            subject: "Химия", 
            isPremium: "" 
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3g8DTLmjB_5nIxWxEso8KPi9JCwtpFmBA51ALhhbBjed4KCY7840RiZw7G_Ywqh2glrU3457QpwfVLn_lWA2qWNM7yjX_q5nlDkllQUNjg&s=10", 
            name: "Майкл Фарадей", 
            discovery: "Законы электролиза", 
            age: 75, 
            subject: "Химия/Физика", 
            isPremium: "" 
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQL6Ru1r8lo5FNK0RO6T9qyEU-j-0EdETWTEoe_8cGGxnAGnJAdcG8L5_blTYcV9IKi6bjOxQJdcEQEtMR9tUrT11l4QGB67_aWoEhtjP9EiRenurqjOKyznEhs65DBD2xPRmLbVR_oLiE&s=19", 
            name: "Дороти Кроуфут-Ходжкин", 
            discovery: "Рентгеноструктурный анализ белков", 
            age: 84, 
            subject: "Химия", 
            isPremium: "" 
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Z4e6aNdUDvRR4whfiKw-Wan6RMct5GbN2e8q7TFITclGQAhVHcxQejeOsWyPthF9jq-Ua9NLHmlv2EGkiajI_QnoO4r0_VL8pqud8u9Yhg&s=10", 
            name: "Джабир ибн Хайян", 
            discovery: "Основы лабораторной химии", 
            age: 94, 
            subject: "Алхимия/Химия", 
            isPremium: "" 
        },
        { 
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4zJWPOwDmatMKUyeGSxvAB6KFGdEutCg63-gF3KNq3GBT61UOid5CwcM53n2rMnMtFYDXQmbn03loJc6bHUezGFqLWQDpSAHI1XPzJSMEw&s=10", 
            name: "Генри Кавендиш", 
            discovery: "Открытие водорода", 
            age: 78, 
            subject: "Химия", 
            isPremium: "" 
        }
    ];

    const scientist_func =(scientist)=>{
        console.log(scientist); 
    }
  return (
    // <div className="logo"><h1>DZ2</h1></div>
    <div className='main_table'>
        {list_scientists.map((item)=>{
        return <div className="all_scientist" onClick={()=> scientist_func(item)} key={item.name}>
            <img className='scy-img' src={item.url} alt="scientist"/>
            <h3>{item.name}</h3>
            <p>{item.discovery}</p>
            <p>{item.age}</p>
            <p>{item.subject}</p>
            {item.isPremium && <h5 className='prem'><span class="glyphs--crown-bold"></span>{item.isPremium}</h5>}
        </div>
    })}
    </div>
  )
}

export default ViewUsers